class Solution(object):
    def maxScoreSightseeingPair(self, values):
        """
        :type values: List[int]
        :rtype: int
        """
        max_score = 0
        max_i = values[0]  # Initialize with values[0] + 0
        
        for j in range(1, len(values)):
            # Calculate the score for the current pair (i, j)
            max_score = max(max_score, max_i + values[j] - j)
            # Update max_i to include the current value and index
            max_i = max(max_i, values[j] + j)
        
        return max_score

# Example usage
values = [8, 1, 5, 2, 6]
solution = Solution()
print(solution.maxScoreSightseeingPair(values))  # Output: 11