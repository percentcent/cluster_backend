fr = open('user2tweet.txt','r',encoding="utf-8")
ft = open('tweetResult10.txt','r',encoding="utf-8")
outputF = open('userTopic10.txt','w')

userList = []
user2topic = {}
for line in fr:
	line = line.strip('\n')
	userList.append(line)
	if line not in user2topic:
		temp = []
		user2topic[line] = temp

count = 0
for line in ft:
	line = line.strip('\n')
	topics = line.split(' ')
	userId = userList[count]
	for temp in topics:
		topic = temp[9:]
		user2topic[userId].append(topic)
	count += 1
	
for user in user2topic:
	topicList = user2topic[user]
	topicDict = {}
	for topic in topicList:
		if topic not in topicDict:
			topicDict[topic] = 1
		else:
			topicDict[topic] += 1
	topicSort = []
	for key in topicDict:
		value = topicDict[key]
		topicSort.append((value,key))
	topicSort.sort()
	topicSort.reverse()
	outputF.write(user)
	for t in topicSort:
		outputF.write('\t'+t[1]+'\t'+str(t[0]))
	outputF.write('\n')
