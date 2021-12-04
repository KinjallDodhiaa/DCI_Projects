class loginId {
  email;
  password;
  constructor(userEmail, userPassword) {
    this.email = userEmail;
    this.password = userPassword;
  }
}

class StudentId {
  FirstName;
  LastName;
  DateOfBirth;
  Gender;
  MobileNumber;
  TelephoneNumber;
  HouseNumber;
  StreetName;
  City;
  PinCode;
  Country;

  constructor() {
    this.FirstName = "Mysha";
    this.LastName = "Dodhia";
    this.DateOfBirth = "01.01.2015";
    this.Gender = "Female";
    this.MobileNumber = 887643380895;
    this.TelephoneNumber = 123456;
    this.HouseNumber = 55;
    this.StreetName = "Strasse";
    this.City = "Berlin";
    this.PinCode = 93874;
    this.Country = "Germany";
  }
}

class studentCurrentClassPrimary {
  class1;
  class2;
  class3;
  class4;
  constructor() {
    this.class1 = "First Standard";
    this.class2 = "Second Standard";
    this.class3 = "Third Standard";
    this.class4 = "Forth Standard";
  }
}

class studentCurrentClassSecondary {
  class5;
  class6;
  class7;
  class8;
  class9;
  class10;

  constructor() {
    this.class5 = "Fifth Standard";
    this.class6 = "Sixth Standard";
    this.class7 = "Seventh Standard";
    this.class8 = "Eigth Standard";
    this.class9 = "Ninth Standard";
    this.class10 = "Tenth Standard";
  }
}

class StudentsFeesStructure {
  //studentCurrentClass
  class1Fees;
  class2Fees;
  class3Fees;
  class4Fees;
  class5Fees;
  class6Fees;
  class7Fees;
  class8Fees;
  class9Fees;
  class10Fees;

  constructor() {
    this.class1Fees = 100;
    this.class2Fees = 150;
    this.class3Fees = 200;
    this.class4Fees = 250;
    this.class5Fees = 300;
    this.class6Fees = 350;
    this.class7Fees = 400;
    this.class8Fees = 450;
    this.class9Fees = 500;
    this.class10Fees = 550;
  }
}

class teacher {
  //studentID
  JobStartDate;
  EducationalQualification;
  PrimaryTeacher;
  SecondaryTeacher;
  SubjectSpeciality;
  MonthlySalary;

  constructor() {
    this.JobStartDate = "11.01.2015";
    this.EducationalQualification = "BED";
    this.PrimaryTeacher = true;
    this.SecondaryTeacher = false;
    this.SubjectSpeciality = "Maths";
    this.MonthlySalary = 3000;
  }
}

class attendance {
  //studentCurrentClass
  date;
  status;
}

class Result {
  //studentCurrentCLass
  subject1;
  subject2;
  subject3;
  subject4;
  subject5;
  subject6;
}

let login = new loginId("myshadodhia@school.com", 123456);
console.log(login.email);
console.log(login.password);
console.log(
  "-----------------------------------------------------------------------------------------------------------"
);

let studentInfo = new StudentId();
console.log("Studen ID");
console.log("First Name: " + studentInfo.FirstName);
console.log("Last Name: " + studentInfo.LastName);
console.log("Date of Birth: " + studentInfo.DateOfBirth);
console.log("Gender: " + studentInfo.Gender);
console.log("Mobile Phone: " + studentInfo.MobileNumber);
console.log("Telephone: " + studentInfo.TelephoneNumber);
console.log("StreetName:" + studentInfo.StreetName);
console.log("HouseNumber: " + studentInfo.HouseNumber);
console.log("City: " + studentInfo.City);
console.log("Pincode: " + studentInfo.PinCode);
console.log("Country " + studentInfo.Country);
console.log(
  "----------------------------------------------------------------------------------------------------------"
);

let studentInClass = new studentCurrentClassPrimary();

console.log("Mysha Dodhia is in : " + studentInClass.class1);

let teacherInfo = new StudentId();
teacherInfo.FirstName = "Kinjal";
teacherInfo.LastName = "Dodhia";
teacherInfo.DateOfBirth = "17.10.1990";
teacherInfo.Gender = "Female";
teacherInfo.MobileNumber = 877573547653;
teacherInfo.TelephoneNumber = 8763764;
teacherInfo.HouseNumber = 64;
teacherInfo.StreetName = "Strasse2";
teacherInfo.City = "Berlin";
teacherInfo.PinCode = 67843;
teacherInfo.Country = "Germany";
console.log(
  "----------------------------------------------------------------------------------------------------------------------"
);
console.log("Teacher Id");
console.log("First Name: " + teacherInfo.FirstName);
console.log("Last Name: " + teacherInfo.LastName);
console.log("Date of Birth: " + teacherInfo.DateOfBirth);
console.log("Gender: " + teacherInfo.Gender);
console.log("Mobile Phone: " + teacherInfo.MobileNumber);
console.log("Telephone: " + teacherInfo.TelephoneNumber);
console.log("StreetName:" + teacherInfo.StreetName);
console.log("HouseNumber: " + teacherInfo.HouseNumber);
console.log("City: " + teacherInfo.City);
console.log("Pincode: " + teacherInfo.PinCode);
console.log("Country " + teacherInfo.Country);

teacherInfo = new teacher();
console.log("JobStartDate: " + teacherInfo.JobStartDate);
console.log(
  "EducationalQualification: " + teacherInfo.EducationalQualification
);
console.log("Primary Teacher: " + teacherInfo.PrimaryTeacher);
console.log("Secondary Teacher: " + teacherInfo.SecondaryTeacher);
console.log("Subject Speciality: " + teacherInfo.SubjectSpeciality);
console.log("Monthly Salary: " + teacherInfo.MonthlySalary);
