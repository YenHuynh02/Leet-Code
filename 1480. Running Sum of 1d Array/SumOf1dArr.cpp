// SumOf1dArr.cpp : Defines the entry point for the application.
//

#include "SumOf1dArr.h"

using namespace std;

int addContinuosSumArr(int num) {
	static int total = 0;
	total += num;
	return total;
}

int main()
{
	int nums[100];
	int sizeArr;
	bool validSize = false;
	bool validIndex = false;

	while (!validSize) {
		cout << "Enter size of Array: ";
		cin >> sizeArr;
		if (cin.fail() || sizeArr < 0) {
			cout << "Invalid! Retype int please" << endl;
			cin.clear();
			cin.ignore(numeric_limits<streamsize>::max(), '\n');
		}

		else {
			validSize = true;
		}
	}
	
	for (int i = 0; i < sizeArr; i++) {
		validIndex = false; // Reset factor while traversing thru each index
		while (!validIndex) {	
			cout << "Enter nums[" << i << "]: ";
			cin >> nums[i];
			if (cin.fail()) {
				cout << "Invalid! Retype int please" << endl;
				cin.clear();
				cin.ignore(numeric_limits<streamsize>::max(), '\n');
			}

			else {
				validIndex = true;
			}
		}
	}

	cout << "Output: ";
	for (int i = 0; i < sizeArr; i++) {
		cout << addContinuosSumArr(nums[i]) << " ";
	}
	return 0;
}
