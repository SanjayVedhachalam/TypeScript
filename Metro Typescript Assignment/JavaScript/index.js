"use strict";
let staticUserID = 1000;
let staticMetroCardID = 200;
let staticBookingID = 3000;
let currentLoggedInUserID;
class User {
    constructor(paramUserName, paramUserEmail, paramUserPassword, paramUserConfirmPassword, paramUserPhone, paramUserWalletBalance) {
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
    constructor(paramFromLocation, paramToLocation, paramFair) {
        staticMetroCardID++;
        this.MetroCardID = "MID" + staticMetroCardID;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.Fair = paramFair;
    }
}
class Booking {
    constructor(paramCardID, paramFromLocation, paramToLocation, paramDate, paramTravelFare) {
        this.TravelID = "TID" + staticBookingID;
        this.CardID = paramCardID;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.Date = paramDate;
        this.TravelFare = paramTravelFare;
    }
}
let UserDetailsList = new Array();
let TravelDetailsList = new Array();
let BookingDetailsList = new Array();
TravelDetailsList.push(new Travel("Airport", "Egmore", 55));
TravelDetailsList.push(new Travel("Airport", "Koyembedu", 25));
TravelDetailsList.push(new Travel("Alandur", "Koyembedu", 25));
TravelDetailsList.push(new Travel("Koyembedu", "Egmore", 32));
TravelDetailsList.push(new Travel("Vadapalani", "Egmore", 45));
TravelDetailsList.push(new Travel("Arumbakkam", "Egmore", 25));
TravelDetailsList.push(new Travel("Vadapalani", "Koyembedu", 25));
TravelDetailsList.push(new Travel("Armbakkam", "Koyembedu", 16));
function SignInTab() {
    let SignUpTab = document.getElementById("SignUpTab");
    SignUpTab.style.display = "none";
    let SignInTab = document.getElementById("SignInTab");
    SignInTab.style.display = "block";
}
function SigningIn() {
    let SignUpTab = document.getElementById("SignUpTab");
    SignUpTab.style.display = "none";
    let SignInTab = document.getElementById("SignInTab");
    SignInTab.style.display = "block";
    let SignInEmail = document.getElementById("SignInEmail");
    let SignInPassword = document.getElementById("SignInPassword");
    let flag = false;
    UserDetailsList.forEach(Users => {
        if (Users.UserEmail == SignInEmail.value && Users.UserPassword == SignInPassword.value) {
            flag = true;
            currentLoggedInUserID = Users.UserID;
            alert("Login Successful");
            SigningInCancel();
            document.getElementById("main_page").style.display = "none";
            document.getElementById("NavigationBar").style.display = "flex";
            document.getElementById("HomeTab").style.display = "block";
        }
    });
    if (flag == false) {
        alert("Invalid Login Details. Please try again");
    }
}
function SigningInCancel() {
    let SignInEmail = document.getElementById("SignInEmail");
    let SignInPassword = document.getElementById("SignInPassword");
    SignInEmail.value = "";
    SignInPassword.value = "";
}
function SignUpTab() {
    let SignUpTab = document.getElementById("SignUpTab");
    SignUpTab.style.display = "block";
    let SignInTab = document.getElementById("SignInTab");
    SignInTab.style.display = "none";
}
function SigningUp() {
    let SignUpName = document.getElementById("SignUpName");
    let SignUpEmail = document.getElementById("SignUpEmail");
    let SignUpPassword = document.getElementById("SignUpPassword");
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword");
    let SignUpPhone = document.getElementById("SignUpPhone");
    let SignUpRechargeAmount = document.getElementById("SignUpRechargeAmount");
    if (parseInt(SignUpRechargeAmount.value) > 0) {
        UserDetailsList.push(new User(SignUpName.value, SignUpEmail.value, SignUpPassword.value, SignUpConfirmPassword.value, parseInt(SignUpPhone.value), parseInt(SignUpRechargeAmount.value)));
        alert("User Registered Successfully.");
        SigningUpCancel();
    }
    else {
        alert("Enter a valid Recharge amount");
    }
}
function SigningUpCancel() {
    let SignUpName = document.getElementById("SignUpName");
    let SignUpEmail = document.getElementById("SignUpEmail");
    let SignUpPassword = document.getElementById("SignUpPassword");
    let SignUpConfirmPassword = document.getElementById("SignUpConfirmPassword");
    let SignUpPhone = document.getElementById("SignUpPhone");
    let SignUpRechargeAmount = document.getElementById("SignUpRechargeAmount");
    SignUpName.value = "";
    SignUpEmail.value = "";
    SignUpPassword.value = "";
    SignUpConfirmPassword.value = "";
    SignUpPhone.value = "";
    SignUpRechargeAmount.value = "";
}
function HomeTabDetails() {
    let HomeTab = document.getElementById("HomeTab");
    HomeTab.style.display = "block";
    let TopUpTab = document.getElementById("TopUpTab");
    TopUpTab.style.display = "none";
    let TravelListTab = document.getElementById("TravelListTab");
    TravelListTab.style.display = "none";
    let WalletBalanceTab = document.getElementById("WalletBalanceTab");
    WalletBalanceTab.style.display = "none";
    let BookingTravelTab = document.getElementById("BookingTravelTab");
    BookingTravelTab.style.display = "none";
    let TravelHistoryTab = document.getElementById("TravelHistoryTab");
    TravelHistoryTab.style.display = "none";
    let WelcomeCurrentUserName = document.getElementById("WelcomeCurrentUserName");
    UserDetailsList.forEach(Users => {
        if (Users.UserID == currentLoggedInUserID) {
            WelcomeCurrentUserName.innerText = Users.UserName;
        }
    });
}
function TopUpTabDetails() {
    let HomeTab = document.getElementById("HomeTab");
    HomeTab.style.display = "none";
    let WalletBalanceTab = document.getElementById("WalletBalanceTab");
    WalletBalanceTab.style.display = "none";
    let TravelListTab = document.getElementById("TravelListTab");
    TravelListTab.style.display = "none";
    let BookingTravelTab = document.getElementById("BookingTravelTab");
    BookingTravelTab.style.display = "none";
    let TravelHistoryTab = document.getElementById("TravelHistoryTab");
    TravelHistoryTab.style.display = "none";
    let TopUpTab = document.getElementById("TopUpTab");
    TopUpTab.style.display = "block";
}
function RechargingAmount() {
    let RechargeAmount = document.getElementById("RechargeAmount");
    if (parseInt(RechargeAmount.value) > 0) {
        UserDetailsList.forEach(Users => {
            if (Users.UserID == currentLoggedInUserID) {
                Users.UserWalletBalance += parseInt(RechargeAmount.value);
                alert("Recharge Successful");
                CancelRechargingAmount();
            }
        });
    }
    else {
        alert("Invalid Recharge Amount");
    }
}
function CancelRechargingAmount() {
    let RechargeAmount = document.getElementById("RechargeAmount");
    RechargeAmount.value = "";
}
function WalletBalanceTabDetails() {
    let HomeTab = document.getElementById("HomeTab");
    HomeTab.style.display = "none";
    let TopUpTab = document.getElementById("TopUpTab");
    TopUpTab.style.display = "none";
    let TravelListTab = document.getElementById("TravelListTab");
    TravelListTab.style.display = "none";
    let BookingTravelTab = document.getElementById("BookingTravelTab");
    BookingTravelTab.style.display = "none";
    let TravelHistoryTab = document.getElementById("TravelHistoryTab");
    TravelHistoryTab.style.display = "none";
    let WalletBalanceTab = document.getElementById("WalletBalanceTab");
    WalletBalanceTab.style.display = "block";
    UserDetailsList.forEach(Users => {
        if (Users.UserID == currentLoggedInUserID) {
            let WalletBalanceAmount = document.getElementById("WalletBalanceAmount");
            WalletBalanceAmount.innerText = Users.UserWalletBalance.toString();
        }
    });
}
function TravelListDetailsTab() {
    let HomeTab = document.getElementById("HomeTab");
    HomeTab.style.display = "none";
    let TopUpTab = document.getElementById("TopUpTab");
    TopUpTab.style.display = "none";
    let WalletBalanceTab = document.getElementById("WalletBalanceTab");
    WalletBalanceTab.style.display = "none";
    let NewTravelTab = document.getElementById("NewTravelTab");
    NewTravelTab.style.display = "none";
    let EditTravelTab = document.getElementById("EditTravelTab");
    EditTravelTab.style.display = "none";
    let BookingTravelTab = document.getElementById("BookingTravelTab");
    BookingTravelTab.style.display = "none";
    let TravelHistoryTab = document.getElementById("TravelHistoryTab");
    TravelHistoryTab.style.display = "none";
    let TravelListTab = document.getElementById("TravelListTab");
    TravelListTab.style.display = "block";
    let TravelListTable = document.getElementById("TravelListTable");
    TravelListTable.innerHTML = `<tr>
    <th>ID</th>
    <th>From Location</th>
    <th>To Location</th>
    <th>Travel Fare</th>
    <th>Action</th>
    </tr>`;
    let TempCardID = 0;
    TravelDetailsList.forEach(Travels => {
        if (Travels.MetroCardID != undefined && Travels.FromLocation != undefined && Travels.ToLocation != undefined && Travels.Fair != undefined) {
            TempCardID++;
            TravelListTable.innerHTML += `<tr><td>${TempCardID}</td><td>${Travels.FromLocation}</td><td>${Travels.ToLocation}</td><td>${Travels.Fair}</td><td><button onclick=EditTravelList("${Travels.MetroCardID}")>Edit</button><button onclick=DeleteTravelList("${Travels.MetroCardID}")>Delete</button></td></tr>`;
        }
    });
    TempCardID = 0;
}
let TempEditID;
function EditTravelList(EditCardID) {
    TempEditID = EditCardID;
    let NewTravelTab = document.getElementById("NewTravelTab");
    NewTravelTab.style.display = "none";
    let EditTravelTab = document.getElementById("EditTravelTab");
    EditTravelTab.style.display = "block";
}
function EdittingToList() {
    let EditFromLocation = document.getElementById("EditFromLocation");
    let EditToLocation = document.getElementById("EditToLocation");
    let EditPrice = document.getElementById("EditPrice");
    TravelDetailsList.forEach(Travels => {
        if (Travels.MetroCardID == TempEditID) {
            if (EditFromLocation.value != "") {
                Travels.FromLocation = EditFromLocation.value;
            }
            if (EditToLocation.value != "") {
                Travels.ToLocation = EditToLocation.value;
            }
            if (EditPrice.value != "") {
                Travels.Fair = parseInt(EditPrice.value);
            }
            alert("Travel Editted Successfully");
            TravelListDetailsTab();
            CancelEdittingToList();
        }
    });
}
function CancelEdittingToList() {
    let EditFromLocation = document.getElementById("EditFromLocation");
    let EditToLocation = document.getElementById("EditToLocation");
    let EditPrice = document.getElementById("EditPrice");
    EditFromLocation.value = "";
    EditToLocation.value = "";
    EditPrice.value = "";
}
function DeleteTravelList(DeleteCardID) {
    TravelDetailsList.forEach(Travels => {
        if (Travels.MetroCardID == DeleteCardID) {
            delete Travels.MetroCardID;
            delete Travels.FromLocation;
            delete Travels.ToLocation;
            delete Travels.Fair;
            alert("Travel deleted Successfully");
            TravelListDetailsTab();
        }
    });
}
function AddNewTravel() {
    let NewTravelTab = document.getElementById("NewTravelTab");
    NewTravelTab.style.display = "block";
    let EditTravelTab = document.getElementById("EditTravelTab");
    EditTravelTab.style.display = "none";
}
function AddingToList() {
    let NewFromLocation = document.getElementById("NewFromLocation");
    let NewToLocation = document.getElementById("NewToLocation");
    let NewPrice = document.getElementById("NewPrice");
    if (NewFromLocation.value != "" && NewToLocation.value != "" && NewPrice.value != "") {
        TravelDetailsList.push(new Travel(NewFromLocation.value, NewToLocation.value, parseInt(NewPrice.value)));
        alert("New Travel Added Successfully");
        let NewTravelTab = document.getElementById("NewTravelTab");
        NewTravelTab.style.display = "none";
        CancelAddingToList();
        TravelListDetailsTab();
    }
    else {
        alert("Invalid Data");
    }
}
function CancelAddingToList() {
    let NewFromLocation = document.getElementById("NewFromLocation");
    let NewToLocation = document.getElementById("NewToLocation");
    let NewPrice = document.getElementById("NewPrice");
    NewFromLocation.value = "";
    NewToLocation.value = "";
    NewPrice.value = "";
}
function NotShowEditAndAddTab() {
    let NewTravelTab = document.getElementById("NewTravelTab");
    NewTravelTab.style.display = "none";
    let EditTravelTab = document.getElementById("EditTravelTab");
    EditTravelTab.style.display = "none";
}
function BookTicketTabDetails() {
    let HomeTab = document.getElementById("HomeTab");
    HomeTab.style.display = "none";
    let TopUpTab = document.getElementById("TopUpTab");
    TopUpTab.style.display = "none";
    let WalletBalanceTab = document.getElementById("WalletBalanceTab");
    WalletBalanceTab.style.display = "none";
    let NewTravelTab = document.getElementById("NewTravelTab");
    NewTravelTab.style.display = "none";
    let EditTravelTab = document.getElementById("EditTravelTab");
    EditTravelTab.style.display = "none";
    let TravelListTab = document.getElementById("TravelListTab");
    TravelListTab.style.display = "none";
    let TravelHistoryTab = document.getElementById("TravelHistoryTab");
    TravelHistoryTab.style.display = "none";
    let BookingTravelTab = document.getElementById("BookingTravelTab");
    BookingTravelTab.style.display = "block";
    let BookTravelTable = document.getElementById("BookTravelTable");
    BookTravelTable.innerHTML = `<tr>
    <th>ID</th>
    <th>From Location</th>
    <th>To Location</th>
    <th>Travel Fare</th>
    <th>Action</th>
    </tr>`;
    let TempCardID = 0;
    TravelDetailsList.forEach(Travels => {
        if (Travels.MetroCardID != undefined && Travels.FromLocation != undefined && Travels.ToLocation != undefined && Travels.Fair != undefined) {
            TempCardID++;
            BookTravelTable.innerHTML += `<tr><td>${TempCardID}</td><td>${Travels.FromLocation}</td><td>${Travels.ToLocation}</td><td>${Travels.Fair}</td><td><button onclick=BookingTicket("${Travels.MetroCardID}")>Book</button></td></tr>`;
        }
    });
    TempCardID = 0;
}
function BookingTicket(BookingCardID) {
    TravelDetailsList.forEach(Travels => {
        if (Travels.MetroCardID == BookingCardID) {
            UserDetailsList.forEach(Users => {
                if (Users.UserID == currentLoggedInUserID) {
                    if (Users.UserWalletBalance >= Travels.Fair) {
                        Users.UserWalletBalance -= Travels.Fair;
                        BookingDetailsList.push(new Booking(Travels.MetroCardID, Travels.FromLocation, Travels.ToLocation, new Date(), Travels.Fair));
                        alert("Booking Successful");
                    }
                    else {
                        alert("Please Recharge to book the ticket");
                    }
                }
            });
        }
    });
}
function TravelHistoryTabDetails() {
    let HomeTab = document.getElementById("HomeTab");
    HomeTab.style.display = "none";
    let TopUpTab = document.getElementById("TopUpTab");
    TopUpTab.style.display = "none";
    let WalletBalanceTab = document.getElementById("WalletBalanceTab");
    WalletBalanceTab.style.display = "none";
    let NewTravelTab = document.getElementById("NewTravelTab");
    NewTravelTab.style.display = "none";
    let EditTravelTab = document.getElementById("EditTravelTab");
    EditTravelTab.style.display = "none";
    let TravelListTab = document.getElementById("TravelListTab");
    TravelListTab.style.display = "none";
    let BookingTravelTab = document.getElementById("BookingTravelTab");
    BookingTravelTab.style.display = "none";
    let NoRidesTaken = document.getElementById("NoRidesTaken");
    NoRidesTaken.style.display = "none";
    let TravelHistoryTab = document.getElementById("TravelHistoryTab");
    TravelHistoryTab.style.display = "block";
    let TravelTable = document.getElementById("TravelTable");
    if (BookingDetailsList.length > 0) {
        TravelTable.innerHTML = `<tr>
    <th>ID</th>
    <th>Card Number</th>
    <th>From Location</th>
    <th>To Location</th>
    <th>Date</th>
    <th>Travel Cost</th>
    </tr>`;
        //let Today: Date = new Date().toLocaleDateString();
        let TempBookID = 0;
        BookingDetailsList.forEach(Bookings => {
            TempBookID++;
            TravelTable.innerHTML += `<tr><td>${TempBookID}</td><td>${Bookings.CardID}</td><td>${Bookings.FromLocation}</td><td>${Bookings.ToLocation}</td><td>${new Date().toLocaleDateString()}</td><td>${Bookings.TravelFare}</td></tr>`;
        });
        TempBookID = 0;
    }
    else {
        let NoRidesTaken = document.getElementById("NoRidesTaken");
        NoRidesTaken.style.display = "block";
    }
}
