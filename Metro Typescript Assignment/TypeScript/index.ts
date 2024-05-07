let staticUserID = 1000;
let staticMetroCardID = 200;
let staticBookingID = 3000;
let currentLoggedInUserID: string;

class User {
    UserID: string
    UserName: string
    UserEmail: string
    UserPassword: string
    UserConfirmPassword: string
    UserPhone: number
    UserWalletBalance: number

    constructor(paramUserName: string, paramUserEmail: string , paramUserPassword: string, paramUserConfirmPassword: string, paramUserPhone: number, paramUserWalletBalance: number){
        staticUserID++;
        this.UserID = "UID" + staticUserID;
        this.UserName = paramUserName;
        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserConfirmPassword = paramUserConfirmPassword;
        this.UserPhone = paramUserPhone;
        this.UserWalletBalance = paramUserWalletBalance;
    }
}

class Travel {
    MetroCardID: string
    FromLocation: string
    ToLocation: string
    Fair: number

    constructor(paramFromLocation: string, paramToLocation: string, paramFair: number){
        staticMetroCardID++;
        this.MetroCardID = "MID" + staticMetroCardID
        this.FromLocation = paramFromLocation
        this.ToLocation = paramToLocation
        this.Fair = paramFair
    }
}
class Booking {
    TravelID: string
    CardID: string
    FromLocation: string
    ToLocation: string
    Date: Date
    TravelFare: number

    constructor(paramCardID: string, paramFromLocation: string, paramToLocation: string, paramDate: Date, paramTravelFare: number){
        this.TravelID = "TID" + staticBookingID
        this.CardID = paramCardID
        this.FromLocation = paramFromLocation
        this.ToLocation = paramToLocation
        this.Date = paramDate
        this.TravelFare = paramTravelFare
    }
}

let UserDetailsList: Array<User> = new Array<User>();
let TravelDetailsList: Array<Travel> = new Array<Travel>();
let BookingDetailsList: Array<Booking> = new Array<Booking>()

TravelDetailsList.push(new Travel("Airport","Egmore",55));
TravelDetailsList.push(new Travel("Airport","Koyembedu",25));
TravelDetailsList.push(new Travel("Alandur","Koyembedu",25));
TravelDetailsList.push(new Travel("Koyembedu","Egmore",32));
TravelDetailsList.push(new Travel("Vadapalani","Egmore",45));
TravelDetailsList.push(new Travel("Arumbakkam","Egmore",25));
TravelDetailsList.push(new Travel("Vadapalani","Koyembedu",25));
TravelDetailsList.push(new Travel("Armbakkam","Koyembedu",16));
function SignInTab(){
    let SignUpTab = document.getElementById("SignUpTab") as HTMLDivElement;
    SignUpTab.style.display = "none";
    let SignInTab = document.getElementById("SignInTab") as HTMLDivElement;
    SignInTab.style.display = "block";

}
function SigningIn(){
    let SignUpTab = document.getElementById("SignUpTab") as HTMLDivElement;
    SignUpTab.style.display = "none";
    let SignInTab = document.getElementById("SignInTab") as HTMLDivElement;
    SignInTab.style.display = "block";

    let SignInEmail = document.getElementById("SignInEmail") as HTMLInputElement;
    let SignInPassword = document.getElementById("SignInPassword") as HTMLInputElement;

    let flag: boolean = false;
    UserDetailsList.forEach(Users =>{
        if(Users.UserEmail == SignInEmail.value && Users.UserPassword == SignInPassword.value){
            flag = true;
            currentLoggedInUserID = Users.UserID;
            alert("Login Successful")
            
            SigningInCancel();
            (document.getElementById("main_page") as HTMLDivElement).style.display = "none";
            (document.getElementById("NavigationBar") as HTMLDivElement).style.display = "flex";
            (document.getElementById("HomeTab") as HTMLDivElement).style.display = "block";
        }
    })
    if(flag == false){
        alert("Invalid Login Details. Please try again")
    }
}

function SigningInCancel(){
    let SignInEmail = document.getElementById("SignInEmail") as HTMLInputElement;
    let SignInPassword = document.getElementById("SignInPassword") as HTMLInputElement;

    SignInEmail.value = "";
    SignInPassword.value = "";
}

function SignUpTab(){
    let SignUpTab = document.getElementById("SignUpTab") as HTMLDivElement;
    SignUpTab.style.display = "block";
    let SignInTab = document.getElementById("SignInTab") as HTMLDivElement;
    SignInTab.style.display = "none";
}

function SigningUp(){
    let SignUpName = document.getElementById("SignUpName") as HTMLInputElement;
    let SignUpEmail = document.getElementById("SignUpEmail") as HTMLInputElement;
    let SignUpPassword = document.getElementById("SignUpPassword") as HTMLInputElement;
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword") as HTMLInputElement;
    let SignUpPhone = document.getElementById("SignUpPhone") as HTMLInputElement;
    let SignUpRechargeAmount = document.getElementById("SignUpRechargeAmount") as HTMLInputElement;

    if(parseInt(SignUpRechargeAmount.value) > 0){
        UserDetailsList.push(new User(SignUpName.value,SignUpEmail.value, SignUpPassword.value, SignUpConfirmPassword.value, parseInt(SignUpPhone.value), parseInt(SignUpRechargeAmount.value)))
        alert("User Registered Successfully.");
        SigningUpCancel();
    }
    else{
        alert("Enter a valid Recharge amount")
    }

}

function SigningUpCancel(){
    let SignUpName = document.getElementById("SignUpName") as HTMLInputElement;
    let SignUpEmail = document.getElementById("SignUpEmail") as HTMLInputElement;
    let SignUpPassword = document.getElementById("SignUpPassword") as HTMLInputElement;
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword") as HTMLInputElement;
    let SignUpPhone = document.getElementById("SignUpPhone") as HTMLInputElement;
    let SignUpRechargeAmount = document.getElementById("SignUpRechargeAmount") as HTMLInputElement;

    SignUpName.value = "";
    SignUpEmail.value = "";
    SignUpPassword.value = ""; 
    SignUpConfirmPassword.value = "";
    SignUpPhone.value = ""; 
    SignUpRechargeAmount.value = "";  
}

function HomeTabDetails(){
    let HomeTab = document.getElementById("HomeTab") as HTMLDivElement;
    HomeTab.style.display = "block";

    let TopUpTab = document.getElementById("TopUpTab") as HTMLDivElement;
    TopUpTab.style.display = "none";
    
    let TravelListTab = document.getElementById("TravelListTab") as HTMLDivElement;
    TravelListTab.style.display = "none";

    let WalletBalanceTab = document.getElementById("WalletBalanceTab") as HTMLDivElement;
    WalletBalanceTab.style.display = "none";

    let BookingTravelTab = document.getElementById("BookingTravelTab") as HTMLDivElement
    BookingTravelTab.style.display = "none"
    
    let TravelHistoryTab = document.getElementById("TravelHistoryTab") as HTMLDivElement
    TravelHistoryTab.style.display = "none"

    let WelcomeCurrentUserName = document.getElementById("WelcomeCurrentUserName") as HTMLSpanElement
    UserDetailsList.forEach( Users =>{
        if(Users.UserID == currentLoggedInUserID){
            WelcomeCurrentUserName.innerText = Users.UserName;
        }
    })
   
}

function TopUpTabDetails(){
    let HomeTab = document.getElementById("HomeTab") as HTMLDivElement;
    HomeTab.style.display = "none";

    let WalletBalanceTab = document.getElementById("WalletBalanceTab") as HTMLDivElement;
    WalletBalanceTab.style.display = "none";

    let TravelListTab = document.getElementById("TravelListTab") as HTMLDivElement;
    TravelListTab.style.display = "none";

    let BookingTravelTab = document.getElementById("BookingTravelTab") as HTMLDivElement
    BookingTravelTab.style.display = "none"
    
    let TravelHistoryTab = document.getElementById("TravelHistoryTab") as HTMLDivElement
    TravelHistoryTab.style.display = "none"

    let TopUpTab = document.getElementById("TopUpTab") as HTMLDivElement;
    TopUpTab.style.display = "block";

}

function RechargingAmount(){
    let RechargeAmount = document.getElementById("RechargeAmount") as HTMLInputElement;
    if(parseInt(RechargeAmount.value) > 0){
        UserDetailsList.forEach(Users =>{
            if(Users.UserID == currentLoggedInUserID){
                Users.UserWalletBalance += parseInt(RechargeAmount.value);
                alert("Recharge Successful");
                CancelRechargingAmount();
            }
        })
    }
    else{
        alert("Invalid Recharge Amount");
    }
}
function CancelRechargingAmount(){
    let RechargeAmount = document.getElementById("RechargeAmount") as HTMLInputElement;
    RechargeAmount.value = "";
}

function WalletBalanceTabDetails(){
    let HomeTab = document.getElementById("HomeTab") as HTMLDivElement;
    HomeTab.style.display = "none";

    let TopUpTab = document.getElementById("TopUpTab") as HTMLDivElement;
    TopUpTab.style.display = "none";

    let TravelListTab = document.getElementById("TravelListTab") as HTMLDivElement;
    TravelListTab.style.display = "none";

    let BookingTravelTab = document.getElementById("BookingTravelTab") as HTMLDivElement
    BookingTravelTab.style.display = "none"
    
    let TravelHistoryTab = document.getElementById("TravelHistoryTab") as HTMLDivElement
    TravelHistoryTab.style.display = "none"

    let WalletBalanceTab = document.getElementById("WalletBalanceTab") as HTMLDivElement;
    WalletBalanceTab.style.display = "block";

    UserDetailsList.forEach(Users =>{
        if(Users.UserID == currentLoggedInUserID){
            let WalletBalanceAmount = document.getElementById("WalletBalanceAmount") as HTMLSpanElement;
            WalletBalanceAmount.innerText = Users.UserWalletBalance.toString();
        }
    })
}

function TravelListDetailsTab(){
    let HomeTab = document.getElementById("HomeTab") as HTMLDivElement;
    HomeTab.style.display = "none";

    let TopUpTab = document.getElementById("TopUpTab") as HTMLDivElement;
    TopUpTab.style.display = "none";
    
    let WalletBalanceTab = document.getElementById("WalletBalanceTab") as HTMLDivElement;
    WalletBalanceTab.style.display = "none";

    let NewTravelTab = document.getElementById("NewTravelTab") as HTMLDivElement;
    NewTravelTab.style.display = "none";

    let EditTravelTab = document.getElementById("EditTravelTab") as HTMLDivElement
    EditTravelTab.style.display = "none";

    let BookingTravelTab = document.getElementById("BookingTravelTab") as HTMLDivElement
    BookingTravelTab.style.display = "none"

    let TravelHistoryTab = document.getElementById("TravelHistoryTab") as HTMLDivElement
    TravelHistoryTab.style.display = "none"

    let TravelListTab = document.getElementById("TravelListTab") as HTMLDivElement;
    TravelListTab.style.display = "block";

    let TravelListTable = document.getElementById("TravelListTable") as HTMLTableElement
    TravelListTable.innerHTML = `<tr>
    <th>ID</th>
    <th>From Location</th>
    <th>To Location</th>
    <th>Travel Fare</th>
    <th>Action</th>
    </tr>`

    let TempCardID = 0;
    TravelDetailsList.forEach(Travels =>{
        
        if(Travels.MetroCardID != undefined && Travels.FromLocation != undefined && Travels.ToLocation != undefined && Travels.Fair != undefined){
            TempCardID++;
            TravelListTable.innerHTML += `<tr><td>${TempCardID}</td><td>${Travels.FromLocation}</td><td>${Travels.ToLocation}</td><td>${Travels.Fair}</td><td><button onclick=EditTravelList("${Travels.MetroCardID}")>Edit</button><button onclick=DeleteTravelList("${Travels.MetroCardID}")>Delete</button></td></tr>`
        }
    })
    TempCardID = 0;
}
let TempEditID: string
function EditTravelList(EditCardID: string){
    TempEditID = EditCardID;
    
    let NewTravelTab = document.getElementById("NewTravelTab") as HTMLDivElement;
    NewTravelTab.style.display = "none";
    
    let EditTravelTab = document.getElementById("EditTravelTab") as HTMLDivElement
    EditTravelTab.style.display = "block";

}
function EdittingToList(){
    let EditFromLocation = document.getElementById("EditFromLocation") as HTMLInputElement;
    let EditToLocation = document.getElementById("EditToLocation") as HTMLInputElement;
    let EditPrice = document.getElementById("EditPrice") as HTMLInputElement;

    TravelDetailsList.forEach(Travels =>{
        if(Travels.MetroCardID == TempEditID){
            if(EditFromLocation.value != ""){
                Travels.FromLocation = EditFromLocation.value;
            }
            if(EditToLocation.value != ""){
                Travels.ToLocation = EditToLocation.value;
            }
            if(EditPrice.value != ""){
                Travels.Fair = parseInt(EditPrice.value);
            }
            alert("Travel Editted Successfully")
            TravelListDetailsTab();
            CancelEdittingToList();
        }
    })
}
function CancelEdittingToList(){
    let EditFromLocation = document.getElementById("EditFromLocation") as HTMLInputElement;
    let EditToLocation = document.getElementById("EditToLocation") as HTMLInputElement;
    let EditPrice = document.getElementById("EditPrice") as HTMLInputElement;

    EditFromLocation.value = ""
    EditToLocation.value = ""
    EditPrice.value = ""
}
function DeleteTravelList(DeleteCardID: string){
    TravelDetailsList.forEach(Travels =>{
        if(Travels.MetroCardID == DeleteCardID){
            delete Travels.MetroCardID
            delete Travels.FromLocation
            delete Travels.ToLocation
            delete Travels.Fair
            alert("Travel deleted Successfully")
            TravelListDetailsTab()
        }
    })
}

function AddNewTravel(){
    let NewTravelTab = document.getElementById("NewTravelTab") as HTMLDivElement;
    NewTravelTab.style.display = "block";

    let EditTravelTab = document.getElementById("EditTravelTab") as HTMLDivElement
    EditTravelTab.style.display = "none";
}

function AddingToList(){
    let NewFromLocation = document.getElementById("NewFromLocation") as HTMLInputElement;
    let NewToLocation = document.getElementById("NewToLocation") as HTMLInputElement;
    let NewPrice = document.getElementById("NewPrice") as HTMLInputElement;

    if(NewFromLocation.value != "" && NewToLocation.value != "" && NewPrice.value != ""){
        TravelDetailsList.push(new Travel(NewFromLocation.value, NewToLocation.value, parseInt(NewPrice.value)))
        alert("New Travel Added Successfully")
        let NewTravelTab = document.getElementById("NewTravelTab") as HTMLDivElement;
        NewTravelTab.style.display = "none";
        CancelAddingToList();
        TravelListDetailsTab();
    }
    else{
        alert("Invalid Data")
    }
}

function CancelAddingToList(){
    let NewFromLocation = document.getElementById("NewFromLocation") as HTMLInputElement;
    let NewToLocation = document.getElementById("NewToLocation") as HTMLInputElement;
    let NewPrice = document.getElementById("NewPrice") as HTMLInputElement;

    NewFromLocation.value = "";
    NewToLocation.value = "";
    NewPrice.value = "";
}

function NotShowEditAndAddTab(){
    let NewTravelTab = document.getElementById("NewTravelTab") as HTMLDivElement;
    NewTravelTab.style.display = "none";

    let EditTravelTab = document.getElementById("EditTravelTab") as HTMLDivElement
    EditTravelTab.style.display = "none";
}

function BookTicketTabDetails(){
    let HomeTab = document.getElementById("HomeTab") as HTMLDivElement;
    HomeTab.style.display = "none";

    let TopUpTab = document.getElementById("TopUpTab") as HTMLDivElement;
    TopUpTab.style.display = "none";
    
    let WalletBalanceTab = document.getElementById("WalletBalanceTab") as HTMLDivElement;
    WalletBalanceTab.style.display = "none";

    let NewTravelTab = document.getElementById("NewTravelTab") as HTMLDivElement;
    NewTravelTab.style.display = "none";

    let EditTravelTab = document.getElementById("EditTravelTab") as HTMLDivElement
    EditTravelTab.style.display = "none";

    let TravelListTab = document.getElementById("TravelListTab") as HTMLDivElement;
    TravelListTab.style.display = "none";

    let TravelHistoryTab = document.getElementById("TravelHistoryTab") as HTMLDivElement
    TravelHistoryTab.style.display = "none"

    let BookingTravelTab = document.getElementById("BookingTravelTab") as HTMLDivElement
    BookingTravelTab.style.display = "block"

    let BookTravelTable = document.getElementById("BookTravelTable") as HTMLTableElement
    BookTravelTable.innerHTML = `<tr>
    <th>ID</th>
    <th>From Location</th>
    <th>To Location</th>
    <th>Travel Fare</th>
    <th>Action</th>
    </tr>`

    let TempCardID: number = 0
    TravelDetailsList.forEach(Travels =>{
        if(Travels.MetroCardID != undefined && Travels.FromLocation != undefined && Travels.ToLocation != undefined && Travels.Fair != undefined){
        TempCardID++;
        BookTravelTable.innerHTML += `<tr><td>${TempCardID}</td><td>${Travels.FromLocation}</td><td>${Travels.ToLocation}</td><td>${Travels.Fair}</td><td><button onclick=BookingTicket("${Travels.MetroCardID}")>Book</button></td></tr>`
        }
    })
    TempCardID = 0

}

function BookingTicket(BookingCardID: string){
    TravelDetailsList.forEach(Travels =>{
        if(Travels.MetroCardID == BookingCardID){
            UserDetailsList.forEach(Users =>{
                if(Users.UserID == currentLoggedInUserID){
                    if(Users.UserWalletBalance>=Travels.Fair){
                        Users.UserWalletBalance-=Travels.Fair
                        BookingDetailsList.push(new Booking(Travels.MetroCardID, Travels.FromLocation, Travels.ToLocation,new Date(), Travels.Fair))
                        alert("Booking Successful")
                    }
                    else{
                        alert("Please Recharge to book the ticket")
                    }
                }
            })
        }
    })
}

function TravelHistoryTabDetails(){
    let HomeTab = document.getElementById("HomeTab") as HTMLDivElement;
    HomeTab.style.display = "none";

    let TopUpTab = document.getElementById("TopUpTab") as HTMLDivElement;
    TopUpTab.style.display = "none";
    
    let WalletBalanceTab = document.getElementById("WalletBalanceTab") as HTMLDivElement;
    WalletBalanceTab.style.display = "none";

    let NewTravelTab = document.getElementById("NewTravelTab") as HTMLDivElement;
    NewTravelTab.style.display = "none";

    let EditTravelTab = document.getElementById("EditTravelTab") as HTMLDivElement
    EditTravelTab.style.display = "none";

    let TravelListTab = document.getElementById("TravelListTab") as HTMLDivElement;
    TravelListTab.style.display = "none";

    let BookingTravelTab = document.getElementById("BookingTravelTab") as HTMLDivElement
    BookingTravelTab.style.display = "none"

    let NoRidesTaken = document.getElementById("NoRidesTaken") as HTMLHeadingElement
    NoRidesTaken.style.display = "none"

    let TravelHistoryTab = document.getElementById("TravelHistoryTab") as HTMLDivElement
    TravelHistoryTab.style.display = "block"

    let TravelTable = document.getElementById("TravelTable") as HTMLTableElement
    if(BookingDetailsList.length>0){
        TravelTable.innerHTML = `<tr>
    <th>ID</th>
    <th>Card Number</th>
    <th>From Location</th>
    <th>To Location</th>
    <th>Date</th>
    <th>Travel Cost</th>
    </tr>`

    //let Today: Date = new Date().toLocaleDateString();
    let TempBookID: number = 0;
    BookingDetailsList.forEach(Bookings =>{
        TempBookID++;
        TravelTable.innerHTML += `<tr><td>${TempBookID}</td><td>${Bookings.CardID}</td><td>${Bookings.FromLocation}</td><td>${Bookings.ToLocation}</td><td>${new Date().toLocaleDateString()}</td><td>${Bookings.TravelFare}</td></tr>`
    })
    TempBookID = 0;
    }
    else{
        let NoRidesTaken = document.getElementById("NoRidesTaken") as HTMLHeadingElement
        NoRidesTaken.style.display = "block"
    }
}