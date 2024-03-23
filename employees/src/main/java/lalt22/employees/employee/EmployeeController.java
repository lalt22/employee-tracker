package lalt22.employees.employee;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins="*", allowedHeaders="*")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping
	public ResponseEntity<Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data) {
		System.out.println(data.getFirstName());
		System.out.println(data.getLastName());
		Employee createdEmployee = this.employeeService.createEmployee(data);
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Employee>> getEmployeeByParam(@RequestParam Map<String,String> allParams) {
//		if (allParams.isEmpty()) {
			List<Employee> allEmployees = this.employeeService.getAll();
			return new ResponseEntity<>(allEmployees, HttpStatus.OK);
//		}
//		else {
//			List<Employee> filteredEmployees = this.employeeService.getFilteredTasks(allParams);
//			return new ResponseEntity<>(filteredEmployees, HttpStatus.OK);
//		}
	}
	
}
