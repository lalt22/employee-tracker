package lalt22.employees.employee;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
		Employee createdEmployee = this.employeeService.createEmployee(data);
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Employee>> getEmployeeByParam(@RequestParam Map<String,String> allParams) {
		if (allParams.isEmpty()) {
			List<Employee> allEmployees = this.employeeService.getAll();
			return new ResponseEntity<>(allEmployees, HttpStatus.OK);
		}
		else if (allParams.containsKey("id")) {
			Long id_long = Long.parseLong(allParams.get("id"));
			Optional<Employee> maybeSingleEmployee = this.employeeService.getById(id_long);
			Employee employeeById = maybeSingleEmployee.orElseThrow();
			List<Employee> asList = Arrays.asList(employeeById);
			return new ResponseEntity<>(asList, HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	
	
	@PatchMapping("/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@Valid @RequestBody UpdateEmployeeDTO data, @PathVariable Long id){
		System.out.println(data.getFinishDate());
		Optional<Employee> maybeUpdatedEmployee = this.employeeService.updateEmployeeById(data, id);
		Employee updatedEmployee = maybeUpdatedEmployee.orElseThrow();
		return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id) {
		Employee deletedEmployee = this.employeeService.deleteById(id);
		return new ResponseEntity<>(deletedEmployee, HttpStatus.OK);
	}
	
}
