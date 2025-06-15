import collections


def maxProfit(prices):
    buy_price = prices[0]
    max_profit = 0
    for price in prices:
        buy_price = min(buy_price, price)
        max_profit = max(max_profit, price - buy_price)
    return max_profit


# prices = [10, 8, 7, 5, 2]
# print(maxProfit(prices))


def minWindow(s: str, t: str) -> str:
    if not s or not t or len(s) < len(t):
        return ""
    t_char_count = {}

    for c in t:
        t_char_count[c] = 1 + t_char_count.get(c, 0)

    window = {}
    required = len(t_char_count)
    minLen = float("inf")
    left = 0
    start, end = 0, 0

    for right in range(len(s)):
        char = s[right]
        window[char] = 1 + window.get(char, 0)
        if char in t_char_count and window[char] == t_char_count[char]:
            required -= 1
        # if required is 0, the current window is valid
        while required == 0:
            if right - left + 1 < minLen:
                start = left
                end = right + 1
                minLen = right - left + 1
            window[s[left]] -= 1

            if s[left] in t_char_count and window[s[left]] < t_char_count[s[left]]:
                required += 1
            left += 1

    return s[start:end]


# print(minWindow("abcdxyreoy", "xyoy"))


def maxSlidingWindow(nums, k):
    output = []
    q = collections.deque()
    l = r = 0
    while r < len(nums):

        while q and nums[q[-1]] < nums[r]:
            print(nums[q[-1]], nums[r])
            q.pop()
        q.append(r)

        if l > q[0]:
            q.popleft()

        if (r + 1) >= k:
            output.append(nums[q[0]])
            l += 1
        r += 1
    print(output)
    return output

    # maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3)


def checkInclusion(s1: str, s2: str) -> bool:
    if len(s1) > len(s2):
        return False
    # Count characters in s1
    s1_count = {}
    for c in s1:
        s1_count[c] = s1_count.get(c, 0) + 1
    # Track how many unique characters we still need to match
    required_matches = len(s1_count)
    l = 0
    print(s1_count)
    print(required_matches)
    for r in range(len(s2)):
        # Add character from right

        print(s2[r])

        if s2[r] in s1_count:
            s1_count[s2[r]] -= 1
            if s1_count[s2[r]] == 0:
                required_matches -= 1
        # Check if we have a valid window
        print(s1_count)
        print(required_matches)
        if required_matches == 0:
            return True
        # If window size equals s1 length, move left pointer
        print("Left=", l, "Right=", r)

        if r - l + 1 == len(s1):
            print("Window")
            if s2[l] in s1_count:
                if s1_count[s2[l]] == 0:

                    required_matches += 1
                s1_count[s2[l]] += 1
                print(s1_count)
                print(required_matches)
            l += 1
    return False


print(checkInclusion("hello", "ooolleoooleh"))
print(checkInclusion("abc", "lescabb"))
