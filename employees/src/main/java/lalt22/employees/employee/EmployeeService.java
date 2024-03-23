package lalt22.employees.employee;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	@Autowired 
	private EmployeeRepository employeeRepository;
	
	@Autowired 
	private ModelMapper mapper;
	
	
	
	public Employee createEmployee(CreateEmployeeDTO data) {
		Employee newEmployee = this.mapper.map(data, Employee.class);
		System.out.println(newEmployee.toString());
		return this.employeeRepository.save(newEmployee);
	}
	
	public List<Employee> getAll() {
		return this.employeeRepository.findAll();
	}
}
