#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxScoreSightseeingPair(vector<int>& values) {
    int maxScore = 0;
    int maxI = values[0]; // Initialize with values[0] + 0

    for (int j = 1; j < values.size(); j++) {
        // Calculate the score for the current pair (i, j)
        maxScore = max(maxScore, maxI + values[j] - j);
        // Update maxI to include the current value and index
        maxI = max(maxI, values[j] + j);
    }

    return maxScore;
}

int main() {
    vector<int> values = {8, 1, 5, 2, 6};
    cout << maxScoreSightseeingPair(values) << endl; // Output: 11
    return 0;
}
