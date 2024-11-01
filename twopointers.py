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


print(three_sum([-1, 0, 1, 2, -1, -4]))
