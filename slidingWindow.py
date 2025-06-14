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


maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3)
