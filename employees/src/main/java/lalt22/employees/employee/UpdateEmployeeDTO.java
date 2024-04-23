package lalt22.employees.employee;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class UpdateEmployeeDTO {

		private String firstName;
		
		private String lastName;
		
		private String middleName;
		
		@Email
		private String email;
		
		@Pattern(regexp="(^(04)[0-9]{8})")
		private String mobileNumber;
		
		private String address;
		
		private String permOrContract;
		
		@JsonFormat(pattern="dd-mm-yyyy")
		private String startDate;

		private String finishDate;
		
		private Boolean isOngoing;
		
		private Boolean isFullTime;
		
		private int hoursPerWeek;
		
		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getPermOrContract() {
			return permOrContract;
		}

		public void setPermOrContract(String permOrContract) {
			this.permOrContract = permOrContract;
		}

		public String getStartDate() {
			return startDate;
		}

		public void setStartDate(String startDate) {
			this.startDate = startDate;
		}

		public String getFinishDate() {
			return finishDate;
		}

		public void setFinishDate(String finishDate) {
			this.finishDate = finishDate;
		}

		public Boolean getIsOngoing() {
			return isOngoing;
		}

		public void setIsOngoing(Boolean isOngoing) {
			this.isOngoing = isOngoing;
		}

		public Boolean getIsFullTime() {
			return isFullTime;
		}

		public void setIsFullTime(Boolean isFullTime) {
			this.isFullTime = isFullTime;
		}

		public int getHoursPerWeek() {
			return hoursPerWeek;
		}

		public void setHoursPerWeek(int hoursPerWeek) {
			this.hoursPerWeek = hoursPerWeek;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getMiddleName() {
			return middleName;
		}

		public void setMiddleName(String middleName) {
			this.middleName = middleName;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getMobileNumber() {
			return mobileNumber;
		}

		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}
		
	}

