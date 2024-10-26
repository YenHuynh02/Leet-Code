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
	int sizeArr;
	int nums[1];

	cout << "Enter size of array: ";
	cin >> sizeArr;
	cin >> nums[sizeArr];

	for (int i = 0; i < sizeArr; i++) {
		cout << "Enter arrar index %d:" << i;
		cin >> nums[i];
	}

	for (int i = 0; i < sizeArr; i++) {
		cout << addContinuosSumArr(nums[i]) << "\n" << endl;
	}
}
