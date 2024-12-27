import heapq  # Import heapq for heap operations

class Solution(object):
    def leftmostBuildingQueries(self, heights, queries):
        """
        :type heights: List[int]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
        n = len(heights)
        query_count = len(queries)
        
        # Initialize result array with -1 (default for no meeting place)
        result = [-1] * query_count

        # Deferred queries grouped by the larger index
        deferred_queries = [[] for _ in range(n)]

        # Min-Heap for processing deferred queries efficiently
        min_heap = []

        # Step 1: Handle direct cases and defer others
        for query_index, (alice_start, bob_start) in enumerate(queries):
            if alice_start == bob_start:
                # Alice and Bob are already in the same building
                result[query_index] = alice_start
            elif alice_start < bob_start and heights[alice_start] < heights[bob_start]:
                # Alice can directly move to Bob's building
                result[query_index] = bob_start
            elif alice_start > bob_start and heights[alice_start] > heights[bob_start]:
                # Bob can directly move to Alice's building
                result[query_index] = alice_start
            else:
                # Defer queries where direct movement isn't possible
                max_height = max(heights[alice_start], heights[bob_start])
                max_index = max(alice_start, bob_start)
                deferred_queries[max_index].append((max_height, query_index))

        # Step 2: Process buildings in order
        for current_building in range(n):
            # Process queries in the min-heap for buildings shorter than the current one
            while min_heap and min_heap[0][0] < heights[current_building]:
                _, query_index = heapq.heappop(min_heap)
                result[query_index] = current_building  # Assign current building index as the answer

            # Add deferred queries for the current building to the min-heap
            for max_height, query_index in deferred_queries[current_building]:
                heapq.heappush(min_heap, (max_height, query_index))

        return result

# Example Usage:
solution = Solution()
heights = [3, 1, 4, 2]
queries = [[0, 2], [1, 3], [3, 0]]
print(solution.leftmostBuildingQueries(heights, queries))
