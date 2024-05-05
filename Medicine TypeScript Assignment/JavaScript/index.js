"use strict";
let StaticUserID = 1000;
let StaticMedicineID = 10;
let StaticOrderID = 100;
let CurrentUserID;
class User {
    constructor(paramUserName, paramUserEmailID, paramUserPassword, paramUserConfirmPassword, paramUserPhone) {
        StaticUserID++;
        this.UserID = "UID" + StaticUserID;
        this.UserName = paramUserName;
        this.UserEmailID = paramUserEmailID;
        this.UserPassword = paramUserPassword;
        this.UserConfirmPassword = paramUserConfirmPassword;
        this.UserPhone = paramUserPhone;
        this.UserWalletBalance = 0;
    }
}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Ordered"] = "Ordered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
class Order {
    constructor(paramMedicineID, paramUserID, paramMedicineName, paramMedicineCount, paramOrderStatus) {
        StaticOrderID++;
        this.OrderID = "OID" + StaticOrderID;
        this.MedicineID = paramMedicineID;
        this.UserID = paramUserID;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = parseInt(paramMedicineCount);
        this.OrderStatus = paramOrderStatus;
    }
}
class Medicine {
    constructor(paramMedicineName, paramPrice, paramQuantity) {
        ++StaticMedicineID;
        this.MedicineID = "MID" + StaticMedicineID;
        this.MedicineName = paramMedicineName;
        this.Price = paramPrice;
        this.Quantity = paramQuantity;
    }
}
let UserArrayList = new Array();
let MedicineList = new Array();
let OrderList = new Array();
MedicineList.push(new Medicine("Paracetomol", 5, 50));
MedicineList.push(new Medicine("Colpal", 5, 60));
MedicineList.push(new Medicine("Stepsil", 5, 70));
MedicineList.push(new Medicine("Iodex", 5, 80));
MedicineList.push(new Medicine("Acetherol", 5, 100));
function SignUp() {
    let SignUp = document.getElementById("SignUp");
    let SignIn = document.getElementById("SignIn");
    SignIn.style.display = "none";
    SignUp.style.display = "block";
}
function Confirm() {
    let SignUpName = document.getElementById("SignUpName");
    let SignUpEmailID = document.getElementById("SignUpEmailID");
    let SignUpPassword = document.getElementById("SignUpPassword");
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword");
    let SignUpPhone = document.getElementById("SignUpPhone");
    UserArrayList.push(new User(SignUpName.value, SignUpEmailID.value, SignUpPassword.value, SignUpConfirmPassword.value, parseInt(SignUpPhone.value)));
    alert('Account Created Successfully');
    SignUpCancel();
}
function SignUpCancel() {
    let SignUpName = document.getElementById("SignUpName");
    let SignUpEmailID = document.getElementById("SignUpEmailID");
    let SignUpPassword = document.getElementById("SignUpPassword");
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword");
    let SignUpPhone = document.getElementById("SignUpPhone");
    SignUpName.value = "";
    SignUpEmailID.value = "";
    SignUpPassword.value = "";
    SignUpConfirmPassword.value = "";
    SignUpPhone.value = "";
}
function SignIn() {
    let SignUp = document.getElementById("SignUp");
    let SignIn = document.getElementById("SignIn");
    SignIn.style.display = "block";
    SignUp.style.display = "none";
}
function Enter() {
    let SignInEmailID = document.getElementById("SignInEmailID");
    let SignInPassword = document.getElementById("SignInPassword");
    let flag = false;
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserEmailID == SignInEmailID.value) {
            flag = true;
            if (UserArrayList[i].UserPassword == SignInPassword.value) {
                alert("Login Successful");
                let Main = document.getElementById("Main");
                Main.style.display = "none";
                let AfterLogin = document.getElementById("AfterLogin");
                AfterLogin.style.display = "block";
                let UserNameGreeting = document.getElementById("UserNameGreeting");
                UserNameGreeting.innerText = UserArrayList[i].UserName;
                CurrentUserID = UserArrayList[i].UserID;
            }
            else {
                alert("Incorrect Password");
            }
        }
    }
    if (flag == false) {
        alert("Enter Valid Login Details");
    }
}
function SignInCancel() {
    let SignInEmailID = document.getElementById("SignInEmailID");
    let SignInPassword = document.getElementById("SignInPassword");
    SignInEmailID.value = "";
    SignInPassword.value = "";
}
function Greetings() {
    let Greetings = document.getElementById("Greetings");
    Greetings.style.display = "block";
    let MedicineListDetails = document.getElementById("MedicineListDetails");
    MedicineListDetails.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge");
    WalletRecharge.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance");
    WalletBalance.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder");
    MedicineTableTakeOrder.style.display = "none";
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable");
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory");
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
    CancellingOrderDetailsTable.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab");
    PurchaseQuantityTab.style.display = "none";
    NotShowingAdd();
    NotShowingEdit();
}
function DisplayingMedicineList() {
    let Greetings = document.getElementById("Greetings");
    Greetings.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance");
    WalletBalance.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge");
    WalletRecharge.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder");
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab");
    PurchaseQuantityTab.style.display = "none";
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable");
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory");
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd();
    NotShowingEdit();
    let MedicineListDetails = document.getElementById("MedicineListDetails");
    MedicineListDetails.style.display = "block";
    let MedicineTable = document.getElementById("MedicineTable");
    MedicineTable.innerHTML = `<tr>
        <th>ID</th>
        <th>Medicine Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
    </tr>`;
    let TempID = 0;
    MedicineList.forEach(Medicines => {
        if (Medicines.MedicineID != undefined && Medicines.MedicineName != undefined && Medicines.Price != undefined && Medicines.Quantity != undefined) {
            TempID++;
            MedicineTable.innerHTML += `<tr><td>${TempID}</td><td>${Medicines.MedicineName}</td><td>${Medicines.Price}</td><td>${Medicines.Quantity}</td><td><button onclick=EdittingMedicine("${Medicines.MedicineID}")>Edit</button><button onclick=DeleteMedicine("${Medicines.MedicineID}")>Delete</button></td>`;
        }
    });
    TempID = 0;
}
let TempEditMedicineID;
function EdittingMedicine(EditMedicineID) {
    let EditMedicine = document.getElementById("EditMedicine");
    EditMedicine.style.display = "block";
    NotShowingAdd();
    TempEditMedicineID = EditMedicineID;
}
function AddingEdittedMedicineToList() {
    let EditMedicineName = document.getElementById("EditMedicineName");
    let EditMedicinePrice = document.getElementById("EditMedicinePrice");
    let EditMedicineQuantity = document.getElementById("EditMedicineQuantity");
    MedicineList.forEach(Medicines => {
        if (Medicines.MedicineID == TempEditMedicineID) {
            if (EditMedicineName.value != "") {
                Medicines.MedicineName = EditMedicineName.value;
            }
            if (EditMedicinePrice.value != "") {
                Medicines.Price = parseInt(EditMedicinePrice.value);
            }
            if (EditMedicineQuantity.value != "") {
                Medicines.Quantity = parseInt(EditMedicineQuantity.value);
            }
            alert("Medicine Editted Successfully");
            let EditMedicine = document.getElementById("EditMedicine");
            EditMedicine.style.display = "none";
            EditMedicineName.value = "";
            EditMedicinePrice.value = "";
            EditMedicineQuantity.value = "";
            DisplayingMedicineList();
        }
    });
}
function CancellingEdittedMedicineToList() {
    let EditMedicineName = document.getElementById("EditMedicineName");
    let EditMedicinePrice = document.getElementById("EditMedicinePrice");
    let EditMedicineQuantity = document.getElementById("EditMedicineQuantity");
    EditMedicineName.value = "";
    EditMedicinePrice.value = "";
    EditMedicineQuantity.value = "";
}
function NotShowingEdit() {
    let EditMedicine = document.getElementById("EditMedicine");
    EditMedicine.style.display = "none";
}
function DeleteMedicine(DeleteMedicineID) {
    MedicineList.forEach(Medicines => {
        if (DeleteMedicineID == Medicines.MedicineID) {
            delete Medicines.MedicineID;
            delete Medicines.MedicineName;
            delete Medicines.Price;
            delete Medicines.Quantity;
            alert("Medicine Deleted Succesfully");
            DisplayingMedicineList();
        }
    });
}
function AddingMedicine() {
    let NewMedicine = document.getElementById("NewMedicine");
    NewMedicine.style.display = "block";
    NotShowingEdit();
}
function AddingMedicineToList() {
    let NewMedicineName = document.getElementById("NewMedicineName");
    let NewMedicinePrice = document.getElementById("NewMedicinePrice");
    let NewMedicineQuantity = document.getElementById("NewMedicineQuantity");
    if (NewMedicineName.value == "" && NewMedicinePrice.value == "" && NewMedicineQuantity.value == "") {
        alert("Invalid Data");
    }
    else {
        MedicineList.push(new Medicine(NewMedicineName.value, parseInt(NewMedicinePrice.value), parseInt(NewMedicineQuantity.value)));
        alert("Medicine Added Successfully");
        CancellingMedicineToList();
        DisplayingMedicineList();
        let NewMedicine = document.getElementById("NewMedicine");
        NewMedicine.style.display = "none";
    }
}
function CancellingMedicineToList() {
    let NewMedicineName = document.getElementById("NewMedicineName");
    let NewMedicinePrice = document.getElementById("NewMedicinePrice");
    let NewMedicineQuantity = document.getElementById("NewMedicineQuantity");
    NewMedicineName.value = "";
    NewMedicinePrice.value = "";
    NewMedicineQuantity.value = "";
}
function NotShowingAdd() {
    let NewMedicine = document.getElementById("NewMedicine");
    NewMedicine.style.display = "none";
}
function DisplayingWalletBalance() {
    let Greetings = document.getElementById("Greetings");
    Greetings.style.display = "none";
    let MedicineListDetails = document.getElementById("MedicineListDetails");
    MedicineListDetails.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge");
    WalletRecharge.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder");
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab");
    PurchaseQuantityTab.style.display = "none";
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable");
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory");
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd();
    NotShowingEdit();
    let WalletBalance = document.getElementById("WalletBalance");
    WalletBalance.style.display = "block";
    let Balance = document.getElementById("Balance");
    UserArrayList.forEach(Users => {
        if (Users.UserID == CurrentUserID) {
            Balance.innerText = Users.UserWalletBalance.toString();
        }
    });
}
function DisplayingWalletRecharge() {
    let Greetings = document.getElementById("Greetings");
    Greetings.style.display = "none";
    let MedicineListDetails = document.getElementById("MedicineListDetails");
    MedicineListDetails.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance");
    WalletBalance.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder");
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab");
    PurchaseQuantityTab.style.display = "none";
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable");
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory");
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd();
    NotShowingEdit();
    let WalletRecharge = document.getElementById("WalletRecharge");
    WalletRecharge.style.display = "block";
}
function RechargingWallet() {
    let RechargeAmount = document.getElementById("RechargeAmount");
    let RechargeValue = parseInt(RechargeAmount.value);
    UserArrayList.forEach(Users => {
        if (CurrentUserID == Users.UserID) {
            if (RechargeValue > 0) {
                Users.UserWalletBalance += RechargeValue;
                alert("Recharge Successful");
                RechargeAmount.value = "";
            }
            else {
                alert("Invalid Recharge Amount. Please Try again");
            }
        }
    });
}
function TakingOrder() {
    let Greetings = document.getElementById("Greetings");
    Greetings.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance");
    WalletBalance.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge");
    WalletRecharge.style.display = "none";
    let MedicineListDetails = document.getElementById("MedicineListDetails");
    MedicineListDetails.style.display = "none";
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable");
    OrderHistoryDetailsTable.style.display = "none";
    let NoOrderHistory = document.getElementById("NoOrderHistory");
    NoOrderHistory.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd();
    NotShowingEdit();
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab");
    PurchaseQuantityTab.style.display = "inline-block";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder");
    MedicineTableTakeOrder.style.display = "block";
    MedicineTableTakeOrder.innerHTML = `<tr>
        <th>ID</th>
        <th>Medicine Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
    </tr>`;
    let TempID = 0;
    MedicineList.forEach(Medicines => {
        if (Medicines.MedicineID != undefined && Medicines.MedicineName != undefined && Medicines.Price != undefined && Medicines.Quantity != undefined) {
            TempID++;
            MedicineTableTakeOrder.innerHTML += `<tr><td>${TempID}</td><td>${Medicines.MedicineName}</td><td>${Medicines.Price}</td><td>${Medicines.Quantity}</td><td><button onclick=OrderConfirming("${Medicines.MedicineID}")>Order</button>`;
        }
    });
    TempID = 0;
}
function OrderConfirming(MedicineIDValue) {
    MedicineList.forEach(Medicines => {
        if (MedicineIDValue == Medicines.MedicineID) {
            let PurchaseQuantity = document.getElementById("PurchaseQuantity");
            PurchaseQuantity.style.display = "inline";
            let PurchaseQuantityValue = parseInt(PurchaseQuantity.value);
            if (PurchaseQuantityValue > 0) {
                if (Medicines.Quantity >= PurchaseQuantityValue) {
                    UserArrayList.forEach(Users => {
                        if (CurrentUserID == Users.UserID) {
                            if (Users.UserWalletBalance >= PurchaseQuantityValue * Medicines.Price) {
                                OrderList.push(new Order(Medicines.MedicineID, Users.UserID, Medicines.MedicineName, PurchaseQuantityValue.toString(), OrderStatus.Ordered));
                                Medicines.Quantity -= PurchaseQuantityValue;
                                Users.UserWalletBalance -= PurchaseQuantityValue * Medicines.Price;
                                alert("Order Placed Successfully.");
                                PurchaseQuantity.value = "";
                                TakingOrder();
                            }
                            else {
                                alert("Insufficient Balance");
                            }
                        }
                    });
                }
                else {
                    alert("Insufficient Quantity. The available quantity is " + Medicines.Quantity);
                }
            }
            else {
                alert("Invalid Quantity");
            }
        }
    });
}
function DisplayingOrderHistory() {
    let Greetings = document.getElementById("Greetings");
    Greetings.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance");
    WalletBalance.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge");
    WalletRecharge.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder");
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab");
    PurchaseQuantityTab.style.display = "none";
    let MedicineListDetails = document.getElementById("MedicineListDetails");
    MedicineListDetails.style.display = "none";
    let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
    CancellingOrderDetailsTable.style.display = "none";
    NotShowingAdd();
    NotShowingEdit();
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable");
    if (OrderList.length > 0) {
        let NoOrderHistory = document.getElementById("NoOrderHistory");
        NoOrderHistory.style.display = "none";
        OrderHistoryDetailsTable.style.display = "block";
        OrderHistoryDetailsTable.innerHTML = `<tr><th>Order ID</th><th>Medicine ID</th><th>User ID</th><th>Medicine Name</th><th>Medicine Count</th><th>Order Status</th></tr>`;
        OrderList.forEach(Orders => {
            OrderHistoryDetailsTable.innerHTML += `<tr><td>${Orders.OrderID}</td><td>${Orders.MedicineID}</td><td>${Orders.UserID}</td><td>${Orders.MedicineName}</td><td>${Orders.MedicineCount}</td><td>${Orders.OrderStatus}</td></tr>`;
        });
    }
    else {
        let NoOrderHistory = document.getElementById("NoOrderHistory");
        NoOrderHistory.style.display = "block";
    }
}
let CountForCancellingOrder = 0;
function CancellingOrder() {
    let Greetings = document.getElementById("Greetings");
    Greetings.style.display = "none";
    let WalletBalance = document.getElementById("WalletBalance");
    WalletBalance.style.display = "none";
    let WalletRecharge = document.getElementById("WalletRecharge");
    WalletRecharge.style.display = "none";
    let MedicineTableTakeOrder = document.getElementById("MedicineTableTakeOrder");
    MedicineTableTakeOrder.style.display = "none";
    let PurchaseQuantityTab = document.getElementById("PurchaseQuantityTab");
    PurchaseQuantityTab.style.display = "none";
    let MedicineListDetails = document.getElementById("MedicineListDetails");
    MedicineListDetails.style.display = "none";
    let OrderHistoryDetailsTable = document.getElementById("OrderHistoryDetailsTable");
    OrderHistoryDetailsTable.style.display = "none";
    NotShowingAdd();
    NotShowingEdit();
    OrderList.forEach(Orders => {
        if (Orders.OrderStatus == OrderStatus.Cancelled) {
            CountForCancellingOrder++;
        }
    });
    if (CountForCancellingOrder == OrderList.length) {
        let NoOrderHistory = document.getElementById("NoOrderHistory");
        NoOrderHistory.style.display = "block";
        let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
        CancellingOrderDetailsTable.style.display = "none";
    }
    else {
        if (OrderList.length > 0) {
            let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
            CancellingOrderDetailsTable.style.display = "block";
            let NoOrderHistory = document.getElementById("NoOrderHistory");
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
            OrderList.forEach(Orders => {
                if (Orders.OrderStatus == OrderStatus.Ordered) {
                    CancellingOrderDetailsTable.innerHTML += `<tr><td>${Orders.OrderID}</td><td>${Orders.MedicineID}</td><td>${Orders.UserID}</td><td>${Orders.MedicineName}</td><td>${Orders.MedicineCount}</td><td>${Orders.OrderStatus}</td><td><button onclick=CancelOrderDetails("${Orders.OrderID}")>Cancel</button>`;
                }
            });
        }
        else {
            let NoOrderHistory = document.getElementById("NoOrderHistory");
            NoOrderHistory.style.display = "block";
        }
    }
    CountForCancellingOrder = 0;
}
function CancelOrderDetails(OrderIDValue) {
    OrderList.forEach(Orders => {
        if (Orders.OrderID == OrderIDValue) {
            Orders.OrderStatus = OrderStatus.Cancelled;
            MedicineList.forEach(Medicines => {
                if (Medicines.MedicineID == Orders.MedicineID) {
                    Medicines.Quantity += Orders.MedicineCount;
                    UserArrayList.forEach(Users => {
                        if (Users.UserID == CurrentUserID) {
                            Users.UserWalletBalance += (Orders.MedicineCount * Medicines.Price);
                            alert("Order Cancelled Successfully");
                            AfterCancel();
                        }
                    });
                }
            });
        }
    });
}
let CountForAfterCancel = 0;
function AfterCancel() {
    OrderList.forEach(Orders => {
        if (Orders.OrderStatus == OrderStatus.Cancelled) {
            CountForAfterCancel++;
        }
    });
    if (CountForAfterCancel == OrderList.length) {
        let NoOrderHistory = document.getElementById("NoOrderHistory");
        NoOrderHistory.style.display = "block";
        let CancellingOrderDetailsTable = document.getElementById("CancellingOrderDetailsTable");
        CancellingOrderDetailsTable.style.display = "none";
    }
    else {
        CancellingOrder();
        CountForAfterCancel = 0;
    }
}
