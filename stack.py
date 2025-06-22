def isValid(self, s: str) -> bool:
    stack = []
    mapping = {")": "(", "]": "[", "}": "{"}

    for char in s:
        if char in mapping.values():
            stack.append(char)
        elif char in mapping.keys():
            # check last element in stack
            if stack and stack[-1] == mapping[char]:
                stack.pop()
            else:
                return False

    return not stack


print(isValid("([]){}"))  # True
print(isValid("([)]"))  # False


class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        # Empty lists are "falsy" in Python, so not [] evaluates to True
        # [-1] means "last element"
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
        else:
            self.min_stack.append(self.min_stack[-1])

    def pop(self) -> None:
        if self.stack:
            self.stack.pop()
            self.min_stack.pop()

    def top(self) -> int:
        self.stack[-1]

    def getMin(self) -> int:
        if self.min_stack:
            return self.min_stack[-1]
