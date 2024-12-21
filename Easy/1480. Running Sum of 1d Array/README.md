# Description
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.


## Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

## Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

## Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

<h1 align="center"> How to compile? </h1>

$$ 2 \ options:$$ 

# 1. Using cmd or powershell in vscode 2019

```
g++ -o run SumOf1dArr.cpp
./run
```

## Problem with command g++ cannot found, visit: 

```
https://code.visualstudio.com/docs/cpp/config-mingw
```

<br>

# 2. Using MS Vscode 2022
$$ Prerequisites: $$

```
1. Download workloads as desktop development with C++
2. Select extension from MSVC 'til C++ Clang tools (15 in total)
3. After finished set up, clone the code or create new project as CMake
4. Rebuild solution and start the program
```

<br>