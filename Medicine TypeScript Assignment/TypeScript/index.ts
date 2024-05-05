let StaticUserID = 1000;
let StaticMedicineID = 10;
let StaticOrderID = 100;

let CurrentUserID: string;

class User {
    UserID: string;
    UserName: string;
    UserEmailID: string;
    UserPassword: string;
    UserConfirmPassword: string;
    UserPhone: number;
    UserWalletBalance: number;
    
    constructor(paramUserName: string, paramUserEmailID: string, paramUserPassword: string, paramUserConfirmPassword: string, paramUserPhone: number){
        StaticUserID++;
        this.UserID = "UID"+StaticUserID;
        this.UserName = paramUserName;
        this.UserEmailID = paramUserEmailID;
        this.UserPassword = paramUserPassword;
        this.UserConfirmPassword = paramUserConfirmPassword;
        this.UserPhone = paramUserPhone;
        this.UserWalletBalance = 0;
    }

}

enum OrderStatus{
    Ordered = "Ordered",
    Cancelled = "Cancelled"
}
class Order{
    OrderID: string;
    MedicineID: string;
    UserID: string;
    MedicineName: string;
    MedicineCount: number;
    OrderStatus: OrderStatus;
    
    constructor(paramMedicineID: string, paramUserID: string, paramMedicineName: string, paramMedicineCount: string, paramOrderStatus: OrderStatus){
        StaticOrderID++;
        this.OrderID = "OID"+StaticOrderID;
        this.MedicineID = paramMedicineID;
        this.UserID = paramUserID;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = parseInt(paramMedicineCount);
        this.OrderStatus = paramOrderStatus;
    }
}

class Medicine{
    MedicineID: string;
    MedicineName: string;
    Price: number;
    Quantity: number;

    constructor(paramMedicineName: string, paramPrice: number, paramQuantity: number){
        ++StaticMedicineID;
        this.MedicineID = "MID"+StaticMedicineID;
        this.MedicineName = paramMedicineName;
        this.Price = paramPrice;
        this.Quantity = paramQuantity;
    }
}

let UserArrayList: Array<User> = new Array<User>();
let MedicineList: Array<Medicine> = new Array<Medicine>();
let OrderList: Array<Order> = new Array<Order>();

MedicineList.push(new Medicine("Paracetomol", 5, 50));
MedicineList.push(new Medicine("Colpal", 5, 60));
MedicineList.push(new Medicine("Stepsil", 5, 70));
MedicineList.push(new Medicine("Iodex", 5, 80));
MedicineList.push(new Medicine("Acetherol", 5, 100));

function SignUp(){
    let SignUp = document.getElementById("SignUp") as HTMLDivElement;
    let SignIn = document.getElementById("SignIn") as HTMLDivElement;
    SignIn.style.display = "none";
    SignUp.style.display = "block";
}

function Confirm(){
    let SignUpName = document.getElementById("SignUpName") as HTMLInputElement;
    let SignUpEmailID = document.getElementById("SignUpEmailID") as HTMLInputElement;
    let SignUpPassword = document.getElementById("SignUpPassword") as HTMLInputElement;
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword") as HTMLInputElement;
    let SignUpPhone = document.getElementById("SignUpPhone") as HTMLInputElement;

    UserArrayList.push(new User(SignUpName.value,SignUpEmailID.value,SignUpPassword.value,SignUpConfirmPassword.value,parseInt(SignUpPhone.value)));
    alert('Account Created Successfully');
    SignUpCancel();

}
function SignUpCancel(){
    let SignUpName = document.getElementById("SignUpName") as HTMLInputElement;
    let SignUpEmailID = document.getElementById("SignUpEmailID") as HTMLInputElement;
    let SignUpPassword = document.getElementById("SignUpPassword") as HTMLInputElement;
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword") as HTMLInputElement;
    let SignUpPhone = document.getElementById("SignUpPhone") as HTMLInputElement;

    SignUpName.value = "";
    SignUpEmailID.value = "";
    SignUpPassword.value = "";
    SignUpConfirmPassword.value = "";
    SignUpPhone.value = "";
}
function SignIn(){
    let SignUp = document.getElementById("SignUp") as HTMLDivElement;
    let SignIn = document.getElementById("SignIn") as HTMLDivElement;
    SignIn.style.display = "block";
    SignUp.style.display = "none";
}
function Enter(){
    let SignInEmailID = document.getElementById("SignInEmailID") as HTMLInputElement;
    let SignInPassword = document.getElementById("SignInPassword") as HTMLInputElement;

    let flag = false;
    for (let i = 0; i < UserArrayList.length; i++) {
        if(UserArrayList[i].UserEmailID == SignInEmailID.value){
            flag = true;
            if(UserArrayList[i].UserPassword == SignInPassword.value){
                alert("Login Successful");
                let Main = document.getElementById("Main") as HTMLDivElement;
                Main.style.display = "none";
                let AfterLogin = document.getElementById("AfterLogin") as HTMLDivElement;
                AfterLogin.style.display = "block";
                let UserNameGreeting = document.getElementById("UserNameGreeting") as HTMLSpanElement;
                UserNameGreeting.innerText = UserArrayList[i].UserName;
                CurrentUserID = UserArrayList[i].UserID;
            }
            else{
                alert("Incorrect Password");
            }
        }        
    }
    if(flag == false){
        alert("Enter Valid Login Details");
    }

}
function SignInCancel(){
    let SignInEmailID = document.getElementById("SignInEmailID") as HTMLInputElement;
    let SignInPassword = document.getElementById("SignInPassword") as HTMLInputElement;
    SignInEmailID.value = "";
    SignInPassword.value = "";
}
function Greetings(){
    let Greetings = document.getElementById("Greetings") as HTMLDivElement;
    Greetings.style.display = "block";
    let MedicineListDetails = document.getElementById("MedicineListDetails") as HTMLDivElement;
    MedicineListDetails.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge") as HTMLDivElement;
    WalletRecharge.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance") as HTMLDivElement;
    WalletBalance.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder") as HTMLTableElement;
    MedicineTableTakeOrder.style.display = "none";
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable") as HTMLTableElement;
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
    CancellingOrderDetailsTable.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab") as HTMLDivElement;
    PurchaseQuantityTab.style.display = "none"
    NotShowingAdd()
    NotShowingEdit()
}
function DisplayingMedicineList(){
    let Greetings = document.getElementById("Greetings") as HTMLDivElement;
    Greetings.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance") as HTMLDivElement;
    WalletBalance.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge") as HTMLDivElement;
    WalletRecharge.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder") as HTMLTableElement;
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab") as HTMLDivElement;
    PurchaseQuantityTab.style.display = "none"
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable") as HTMLTableElement;
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd()
    NotShowingEdit() 
    let MedicineListDetails = document.getElementById("MedicineListDetails") as HTMLDivElement;
    MedicineListDetails.style.display = "block"
    let MedicineTable = document.getElementById("MedicineTable") as HTMLTableElement;
    MedicineTable.innerHTML = `<tr>
        <th>ID</th>
        <th>Medicine Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
    </tr>`
    let TempID: number = 0;
    MedicineList.forEach(Medicines => {
        if(Medicines.MedicineID != undefined && Medicines.MedicineName != undefined && Medicines.Price != undefined && Medicines.Quantity != undefined){
        TempID++;
        MedicineTable.innerHTML+=`<tr><td>${TempID}</td><td>${Medicines.MedicineName}</td><td>${Medicines.Price}</td><td>${Medicines.Quantity}</td><td><button onclick=EdittingMedicine("${Medicines.MedicineID}")>Edit</button><button onclick=DeleteMedicine("${Medicines.MedicineID}")>Delete</button></td>`    
        }
    })
    TempID = 0;
}
let TempEditMedicineID: string;
function EdittingMedicine(EditMedicineID: string){
    let EditMedicine = document.getElementById("EditMedicine") as HTMLDivElement;
    EditMedicine.style.display = "block";
    NotShowingAdd()
    TempEditMedicineID = EditMedicineID;
}
function AddingEdittedMedicineToList(){
    let EditMedicineName = document.getElementById("EditMedicineName") as HTMLInputElement; 
    let EditMedicinePrice = document.getElementById("EditMedicinePrice") as HTMLInputElement;
    let EditMedicineQuantity = document.getElementById("EditMedicineQuantity") as HTMLInputElement;
    MedicineList.forEach(Medicines =>{
        if(Medicines.MedicineID == TempEditMedicineID){
            
            if(EditMedicineName.value != ""){
                Medicines.MedicineName = EditMedicineName.value;
            }
            if(EditMedicinePrice.value != ""){
                Medicines.Price = parseInt(EditMedicinePrice.value);
            }
            if(EditMedicineQuantity.value != ""){
                Medicines.Quantity = parseInt(EditMedicineQuantity.value);
            }
            alert("Medicine Editted Successfully")
            let EditMedicine = document.getElementById("EditMedicine") as HTMLDivElement;
            EditMedicine.style.display = "none"
            EditMedicineName.value = "";
            EditMedicinePrice.value = "";
            EditMedicineQuantity.value = "";
            DisplayingMedicineList();

        }
    })
}
function CancellingEdittedMedicineToList(){
    let EditMedicineName = document.getElementById("EditMedicineName") as HTMLInputElement; 
    let EditMedicinePrice = document.getElementById("EditMedicinePrice") as HTMLInputElement;
    let EditMedicineQuantity = document.getElementById("EditMedicineQuantity") as HTMLInputElement;
    EditMedicineName.value = "";
    EditMedicinePrice.value = "";
    EditMedicineQuantity.value = "";
}
function NotShowingEdit(){
    let EditMedicine = document.getElementById("EditMedicine") as HTMLDivElement;
    EditMedicine.style.display = "none"
}
function DeleteMedicine(DeleteMedicineID: string){
    MedicineList.forEach(Medicines =>{
        if(DeleteMedicineID == Medicines.MedicineID){
            delete Medicines.MedicineID
            delete Medicines.MedicineName
            delete Medicines.Price
            delete Medicines.Quantity
            alert("Medicine Deleted Succesfully")
            DisplayingMedicineList();
        }
    })
}

function AddingMedicine(){
    let NewMedicine = document.getElementById("NewMedicine") as HTMLDivElement;
    NewMedicine.style.display = "block";
    NotShowingEdit();
}
function AddingMedicineToList(){
    let NewMedicineName = (document.getElementById("NewMedicineName") as HTMLInputElement);
    let NewMedicinePrice = (document.getElementById("NewMedicinePrice") as HTMLInputElement);
    let NewMedicineQuantity = (document.getElementById("NewMedicineQuantity") as HTMLInputElement);
    if(NewMedicineName.value == "" && NewMedicinePrice.value == "" && NewMedicineQuantity.value == ""){
        alert("Invalid Data")
    }
    else{
        MedicineList.push(new Medicine(NewMedicineName.value,parseInt(NewMedicinePrice.value),parseInt(NewMedicineQuantity.value)));
        alert("Medicine Added Successfully")
        CancellingMedicineToList();
        DisplayingMedicineList();
        let NewMedicine = document.getElementById("NewMedicine") as HTMLDivElement;
        NewMedicine.style.display = "none";
    }
}
function CancellingMedicineToList(){
    let NewMedicineName = (document.getElementById("NewMedicineName") as HTMLInputElement);
    let NewMedicinePrice = (document.getElementById("NewMedicinePrice") as HTMLInputElement);
    let NewMedicineQuantity = (document.getElementById("NewMedicineQuantity") as HTMLInputElement);
    NewMedicineName.value = "";
    NewMedicinePrice.value = "";
    NewMedicineQuantity.value = "";
}
function NotShowingAdd(){
    let NewMedicine = document.getElementById("NewMedicine") as HTMLDivElement;
    NewMedicine.style.display = "none";
}
function DisplayingWalletBalance(){
    let Greetings = document.getElementById("Greetings") as HTMLDivElement;
    Greetings.style.display = "none"
    let MedicineListDetails = document.getElementById("MedicineListDetails") as HTMLDivElement;
    MedicineListDetails.style.display = "none"
    let WalletRecharge = document.getElementById("WalletRecharge") as HTMLDivElement;
    WalletRecharge.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder") as HTMLTableElement;
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab") as HTMLDivElement;
    PurchaseQuantityTab.style.display = "none"
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable") as HTMLTableElement;
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd()
    NotShowingEdit()
    let WalletBalance = document.getElementById("WalletBalance") as HTMLDivElement;
    WalletBalance.style.display = "block";
    let Balance = document.getElementById("Balance") as HTMLSpanElement;
    UserArrayList.forEach(Users =>{
        if(Users.UserID == CurrentUserID){
            Balance.innerText = Users.UserWalletBalance.toString();
        }
    })
}
function DisplayingWalletRecharge(){
    let Greetings = document.getElementById("Greetings") as HTMLDivElement;
    Greetings.style.display = "none"
    let MedicineListDetails = document.getElementById("MedicineListDetails") as HTMLDivElement;
    MedicineListDetails.style.display = "none"
    let WalletBalance = document.getElementById("WalletBalance") as HTMLDivElement;
    WalletBalance.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder") as HTMLTableElement;
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab") as HTMLDivElement;
    PurchaseQuantityTab.style.display = "none"
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable") as HTMLTableElement;
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd()
    NotShowingEdit()
    let WalletRecharge = document.getElementById("WalletRecharge") as HTMLDivElement;
    WalletRecharge.style.display = "block";
}
function RechargingWallet(){
    let RechargeAmount = (document.getElementById("RechargeAmount") as HTMLInputElement);
    let RechargeValue = parseInt(RechargeAmount.value);
    UserArrayList.forEach(Users =>{
        if(CurrentUserID == Users.UserID){
            if(RechargeValue>0){
                Users.UserWalletBalance+=RechargeValue;
                alert("Recharge Successful");
                RechargeAmount.value = "" 
            }
                else{
                    alert("Invalid Recharge Amount. Please Try again");
               
                }
        }
    })
}
    
function TakingOrder(){
    let Greetings = document.getElementById("Greetings") as HTMLDivElement;
    Greetings.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance") as HTMLDivElement;
    WalletBalance.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge") as HTMLDivElement;
    WalletRecharge.style.display = "none";
    let MedicineListDetails = document.getElementById("MedicineListDetails") as HTMLDivElement;
    MedicineListDetails.style.display = "none"
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable") as HTMLTableElement;
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd()
    NotShowingEdit()
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab") as HTMLDivElement;
    PurchaseQuantityTab.style.display = "inline-block"
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder") as HTMLTableElement;
    MedicineTableTakeOrder.style.display = "block";
    MedicineTableTakeOrder.innerHTML = `<tr>
        <th>ID</th>
        <th>Medicine Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
    </tr>`
    let TempID: number = 0;
    MedicineList.forEach(Medicines => {
        if(Medicines.MedicineID != undefined && Medicines.MedicineName != undefined && Medicines.Price != undefined && Medicines.Quantity != undefined){
        TempID++;
        MedicineTableTakeOrder.innerHTML+=`<tr><td>${TempID}</td><td>${Medicines.MedicineName}</td><td>${Medicines.Price}</td><td>${Medicines.Quantity}</td><td><button onclick=OrderConfirming("${Medicines.MedicineID}")>Order</button>`
        }
    })
    TempID = 0;
}
function OrderConfirming(MedicineIDValue: string){

    MedicineList.forEach(Medicines =>{
        if(MedicineIDValue == Medicines.MedicineID)
        {
            let PurchaseQuantity = document.getElementById("PurchaseQuantity") as HTMLInputElement;
            PurchaseQuantity.style.display = "inline"

            let PurchaseQuantityValue = parseInt(PurchaseQuantity.value);
            if(PurchaseQuantityValue > 0){
                if(Medicines.Quantity >= PurchaseQuantityValue){
                    UserArrayList.forEach(Users =>{
                        if(CurrentUserID == Users.UserID){
                            if(Users.UserWalletBalance >= PurchaseQuantityValue*Medicines.Price)
                            {
                                OrderList.push(new Order(Medicines.MedicineID,Users.UserID,Medicines.MedicineName,PurchaseQuantityValue.toString(),OrderStatus.Ordered));
                                Medicines.Quantity-=PurchaseQuantityValue;
                                Users.UserWalletBalance-=PurchaseQuantityValue*Medicines.Price;
                                alert("Order Placed Successfully.");
                                PurchaseQuantity.value = "";
                                TakingOrder();
                            }
                            else{
                                alert("Insufficient Balance");
                            }
                        }
                    })
                }
                else{
                    alert("Insufficient Quantity. The available quantity is "+Medicines.Quantity);
                }
            }
            else{
                alert("Invalid Quantity");
            }
        }
    })
}

function DisplayingOrderHistory()
{
    let Greetings = document.getElementById("Greetings") as HTMLDivElement;
    Greetings.style.display = "none";
    
    let WalletBalance = document.getElementById("WalletBalance") as HTMLDivElement;
    WalletBalance.style.display = "none";
    
    let WalletRecharge = document.getElementById("WalletRecharge") as HTMLDivElement;
    WalletRecharge.style.display = "none";
    
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder") as HTMLTableElement;
    MedicineTableTakeOrder.style.display = "none";
    
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab") as HTMLDivElement;
    PurchaseQuantityTab.style.display = "none"
    
    let MedicineListDetails = document.getElementById("MedicineListDetails") as HTMLDivElement;
    MedicineListDetails.style.display = "none"

    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
    CancellingOrderDetailsTable.style.display = "none";
    
    NotShowingAdd()
    NotShowingEdit()

    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable") as HTMLTableElement;
    
    if(OrderList.length>0){
        let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "none";
        OrderHistoryDetailsTable.style.display = "block";
        OrderHistoryDetailsTable.innerHTML = `<tr><th>Order ID</th><th>Medicine ID</th><th>User ID</th><th>Medicine Name</th><th>Medicine Count</th><th>Order Status</th></tr>`;
        OrderList.forEach(Orders =>{
            OrderHistoryDetailsTable.innerHTML += `<tr><td>${Orders.OrderID}</td><td>${Orders.MedicineID}</td><td>${Orders.UserID}</td><td>${Orders.MedicineName}</td><td>${Orders.MedicineCount}</td><td>${Orders.OrderStatus}</td></tr>`
        })
    }
    else{
        let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "block";
    }
}
let CountForCancellingOrder: number = 0;
function CancellingOrder(){
    let Greetings = document.getElementById("Greetings") as HTMLDivElement;
    Greetings.style.display = "none";
    
    let WalletBalance = document.getElementById("WalletBalance") as HTMLDivElement;
    WalletBalance.style.display = "none";
    
    let WalletRecharge = document.getElementById("WalletRecharge") as HTMLDivElement;
    WalletRecharge.style.display = "none";
    
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder") as HTMLTableElement;
    MedicineTableTakeOrder.style.display = "none";
    
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab") as HTMLDivElement;
    PurchaseQuantityTab.style.display = "none"
    
    let MedicineListDetails = document.getElementById("MedicineListDetails") as HTMLDivElement;
    MedicineListDetails.style.display = "none"
    
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable") as HTMLTableElement;
    OrderHistoryDetailsTable.style.display = "none"

    NotShowingAdd()
    NotShowingEdit()

    OrderList.forEach(Orders =>{
        if(Orders.OrderStatus == OrderStatus.Cancelled){
            CountForCancellingOrder++;
        }
    })
    if(CountForCancellingOrder == OrderList.length){
        let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "block";
        let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
        CancellingOrderDetailsTable.style.display = "none";
    }
    else{
    if(OrderList.length>0){
        let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
        CancellingOrderDetailsTable.style.display = "block";
        let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "none";
        CancellingOrderDetailsTable.innerHTML = `<tr>
            <th>Order ID</th>
            <th>Medicine ID</th>
            <th>User ID</th>
            <th>Medicine Name</th>
            <th>Medicine Count</th>
            <th>Order Status</th>
            <th>Action</th>
        </tr>`;
        OrderList.forEach(Orders =>{
            if(Orders.OrderStatus == OrderStatus.Ordered){
                CancellingOrderDetailsTable.innerHTML += `<tr><td>${Orders.OrderID}</td><td>${Orders.MedicineID}</td><td>${Orders.UserID}</td><td>${Orders.MedicineName}</td><td>${Orders.MedicineCount}</td><td>${Orders.OrderStatus}</td><td><button onclick=CancelOrderDetails("${Orders.OrderID}")>Cancel</button>`
            }
        })
    }
    else{
        let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "block";
    }
}
CountForCancellingOrder = 0;
}
function CancelOrderDetails(OrderIDValue: string){
    OrderList.forEach(Orders =>{
        if(Orders.OrderID == OrderIDValue){
            Orders.OrderStatus = OrderStatus.Cancelled;
            MedicineList.forEach(Medicines =>{
                if(Medicines.MedicineID == Orders.MedicineID){
                    Medicines.Quantity+=Orders.MedicineCount;
                    UserArrayList.forEach(Users =>{
                        if(Users.UserID == CurrentUserID){
                            Users.UserWalletBalance+=(Orders.MedicineCount*Medicines.Price);
                            alert("Order Cancelled Successfully");
                            AfterCancel();
                        }
                    })
                }
            })
        }
    })
}

let CountForAfterCancel: number = 0;
function AfterCancel(){
    OrderList.forEach(Orders =>{
        if(Orders.OrderStatus == OrderStatus.Cancelled){
            CountForAfterCancel++;
        }
    })
    if(CountForAfterCancel == OrderList.length){
        let NoOrderHistory = document.getElementById("NoOrderHistory") as HTMLLabelElement;
        NoOrderHistory.style.display = "block";
        let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable") as HTMLTableElement;
        CancellingOrderDetailsTable.style.display = "none";
    }
    else{
        CancellingOrder();
        CountForAfterCancel = 0;
    }
}