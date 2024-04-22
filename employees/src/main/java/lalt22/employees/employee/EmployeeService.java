package lalt22.employees.employee;

import java.util.List;
import java.util.Optional;

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
		System.out.println(newEmployee.getStartDate());
		System.out.println(newEmployee.toString());
		return this.employeeRepository.save(newEmployee);
	}
	
	public List<Employee> getAll() {
		return this.employeeRepository.findAll();
	}
	
	public Employee deleteById(Long id) {
		Optional<Employee> toDelete = this.employeeRepository.findById(id);
		if (toDelete.isEmpty()) {
			return null;
		}
		this.employeeRepository.deleteById(id);
		return toDelete.orElseThrow();
	}
	
	public Optional<Employee> updateEmployeeById(UpdateEmployeeDTO data, Long id) {
		Optional<Employee> toUpdate = this.employeeRepository.findById(id);
		if (toUpdate.isEmpty()) {
			return null;
		}
		Employee foundEmployee = toUpdate.get();
		mapper.map(data, foundEmployee);
		Employee updatedEmployee = this.employeeRepository.save(foundEmployee);
		return Optional.of(updatedEmployee);
	}
	
	public Optional<Employee> getById(Long id) {
		return this.employeeRepository.findById(id);
	}
}
