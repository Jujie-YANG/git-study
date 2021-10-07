# 1
# # sum = 0
# # for a in range(1, 1000):
# #     if a % 3 == 0 or a % 5 == 0:
# #         sum += a
# # print("sum", sum)


# # 2
# lst = [1, 2]
# lastNum = 3
# while lastNum <= 4000000:
#     lst.append(lastNum)
#     lastNum = lst[len(lst)-1]+lst[len(lst)-2]
# # print("lst", lst)

# sum = 0
# for i in lst:
#     if i % 2 == 0:
#         sum += i
#         # print("i", i)
# print("sum", sum)


# # 3
# n = 600851475143

# while n % 2 == 0:
#     n = n/2

# i = 3
# while i**2 <= n:
#     if n % i == 0:
#         n = n/i
#     else:
#         i += 2
# print("n", n)


# # 4
# lst = [i*k for i in range(100, 1000) for k in range(100, 1000)]
# lst.sort(reverse=True)
# # print(lst[0])
# # print(str(lst[0])[::-1])

# for a in lst:
#     if str(a) == str(a)[::-1]:
#         print(a)
#         break


# 5
# smallestNum


# 6
dif = sum(x for x in range(101))**2 - sum(x**2 for x in range(101))
print(dif)
