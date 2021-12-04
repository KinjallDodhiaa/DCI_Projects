class Person {
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

  constructor(userFirstName,userLastName,userDateOfBirth,userGender,userMobileNumber,userTelephoneNumber,userHouseNumber,userStreetName,userCity,userPinCode,userCountry)
  {
    this.FirstName = userFirstName,
    this.LastName = userLastName,
    this.DateOfBirth = userDateOfBirth,
    this.Gender = userGender,
    this.MobileNumber = userMobileNumber,
    this.TelephoneNumber = userTelephoneNumber,
    this.HouseNumber = userHouseNumber,
    this.StreetName = userStreetName,
    this.City = userCity,
    this.PinCode = userPinCode,
    this.Country = userCountry
}
}

class Student extends Person {
  
  level;
  score;
  studentId;

  constructor(userFirstName,userLastName,userDateOfBirth,userGender,userMobileNumber,userTelephoneNumber,userHouseNumber,userStreetName,userCity,userPinCode,userCountry,userLevel,userScore) 
{
    super(userFirstName,userLastName,userDateOfBirth,userGender,userMobileNumber,userTelephoneNumber,userHouseNumber,userStreetName,userCity,userPinCode,userCountry)
    this.level=userLevel;
    this.score=userScore;
    this.studentId=this.studentIdGenerator();
}
    studentIdGenerator(){
        return Math.floor(Math.random()*100000);
    }
}

class teacher extends Person{
  JobStartDate;
  EducationalQualification;
  PrimaryTeacher;
  SecondaryTeacher;
  SubjectSpeciality;
  MonthlySalary;

  constructor(userFirstName,userLastName,userDateOfBirth,userGender,userMobileNumber,userTelephoneNumber,userHouseNumber,userStreetName,userCity,userPinCode,userCountry,userJobStartDate,userEducationalQualification,userPrimaryTeacher,userSecondaryTeacher,userSubjectSpeciality,userMonthlySalary) 
    {
    super(userFirstName,userLastName,userDateOfBirth,userGender,userMobileNumber,userTelephoneNumber,userHouseNumber,userStreetName,userCity,userPinCode,userCountry);
    this.JobStartDate = userJobStartDate;
    this.EducationalQualification = userEducationalQualification;
    this.PrimaryTeacher = userPrimaryTeacher;
    this.SecondaryTeacher = userSecondaryTeacher;
    this.SubjectSpeciality = userSubjectSpeciality;
    this.MonthlySalary = userMonthlySalary;
}
  
}

let studentInfo = new Student("Mysha","Dodhia","01.01.2015","Female",887643380895,123456,55,"Strasse","Berlin",93874,"Germany",'level_1',0);
console.log(studentInfo);

let teacherInfo = new teacher("Kinjal","Dodhia","17.10.1990","Female",877573547653,8763764,64,"Strasse2","Berlin",67843,"Germany","11.01.2015","BED",true,false,"Maths",3000);
console.log(teacherInfo);