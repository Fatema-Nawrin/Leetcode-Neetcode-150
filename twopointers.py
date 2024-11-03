def two_sum(numbers, target):
    left = 0
    right = len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]

        if current_sum < target:
            left += 1
        elif current_sum > target:
            right -= 1
        else:
            return [left + 1, right + 1]

    return []


# print(two_sum([1, 2, 3, 4], 3))


def is_palindrome(s: str):
    filtered_chars = [char.lower() for char in s if char.isalnum()]
    left = 0
    right = len(filtered_chars) - 1
    while left < right:
        if filtered_chars[left] != filtered_chars[right]:
            return False
        left += 1
        right -= 1
    return True


# print(is_palindrome("Was it a car or a cat I saw?"))


def three_sum(nums):
    nums.sort()
    print(nums)
    result = []
    for i in range(len(nums) - 2):
        # avoid duplicate
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left = i + 1
        right = len(nums) - 1
        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]
            if current_sum == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif current_sum < 0:
                left += 1
            else:
                right -= 1
    return result


# print(three_sum([-1, 0, 1, 2, -1, -4]))


def max_area(heights):
    left = 0
    right = len(heights) - 1
    res = 0
    while left < right:
        area = min(heights[left], heights[right]) * (right - left)
        res = max(res, area)
        if heights[left] <= heights[right]:
            left += 1
        else:
            right -= 1
    return res


# print(max_area([1, 7, 2, 5, 4, 7, 3, 6]))


def trap(height) -> int:
    if not height:
        return 0
    l, r = 0, len(height) - 1
    # Track max height seen from left and right
    leftMax, rightMax = height[l], height[r]
    res = 0
    while l < r:
        if leftMax < rightMax:
            # Move the left pointer (l) to the right and update leftMax.
            l += 1
            leftMax = max(leftMax, height[l])
            res += leftMax - height[l]
        else:
            # Move the right pointer (r) to the left and update rightMax.
            r -= 1
            rightMax = max(rightMax, height[r])
            res += rightMax - height[r]
    return res


print(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]))
