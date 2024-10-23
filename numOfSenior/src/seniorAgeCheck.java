import java.util.Scanner;
public class seniorAgeCheck {

	static void printString(String content) {
		System.out.print(content);
	}
	
	static void printChar(char param) {
		System.out.print(param);
	}
	
	static void newLine() {
		System.out.println();
	}
	
	static void scanner(String[] param) {
		int count = 0;
		int age[] = new int[param.length];
		char firstD;
		char secD;
		
		for (int i = 0; i < 3; i++) {
			// Indices and mobile no.
			printString("Indice " + i + ": \n" + "Mobile phone: ");
			for (int j = 0; j < 10; j++) {
				printChar(param[i].charAt(j));
			}
			newLine();
			
			// Gender
			printString("Gender: ");
			for (int j = 10; j < 11; j++) {
				printString(param[i].charAt(j) == 'M' ? "Male" : "Female");
			}
			newLine();
			
			//Age
			printString("Age: ");
			for (int j = 11; j < 13; j++) {
				 printChar(param[i].charAt(j));
				 
			}
			firstD = param[i].charAt(11);
			secD = param[i].charAt(12);
			age[i] = (firstD - '0') * 10 + (secD - '0');
				 
			if (age[i] > 60) {
				count++;
			}
			newLine();
			
			// Seat no.
			printString("Seat Number: ");
			for (int j = 13; j < 15; j++) {
				printChar(param[i].charAt(j));
			}
			newLine();
			newLine();	
		}
		
		// Output
		printString("Result: The passengers at indices");
		for (int i = 0; i < 3; i++) {
			printString(" "+ i + ",");
		}
		printString(" who have ages ");
		for (int i = 0; i < 3; i++) {
			printString(age[i] + ", ");
		}
		printString("indicate that there are " + count + " peoples who are over 60 years old");		
	}
	
	public static void main(String[] args) {
		//		String[] test = new String[] {"7868190130M7522","5303914400F9211","9273338290F4010"};
		//		String[] test = new String[] {"1313579440F2036","2921522980M5644", "9273338290F4010"};
		String numMobile[] = new String[10];
		
		boolean valid = true;
		
		Scanner keyboard = new Scanner(System.in);
		while(valid) {
			printString("Enter first 10 digits for mobile num: ");
			newLine();
			
			for(int i = 0; i < numMobile.length; i++) {
				while(true) {
					printString("Index [" + i + "]: ");
					String input = keyboard.nextLine();
					if (input.length() == 1) {
						numMobile[i] = input;
						break;
					}
					
					else {
						printString("Invalid input! 1 digit only!");
						newLine();
					}
				}
			}
			valid = false; // Reset factor
		}
		
		keyboard.close();
//		for(int i = 0; i < numMobile.length; i++) {
//			printString("Hello" + numMobile[i]);
//		}
		
		
//		scanner(test);
		
	}
}
