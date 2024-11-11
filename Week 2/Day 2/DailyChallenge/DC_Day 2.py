class Pagination:
    def __init__(self, items=None, pageSize=10):
        if items is None:
            items = []
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 1  

    def getVisibleItems(self):
        start_idx = (self.currentPage - 1) * self.pageSize
        end_idx = start_idx + self.pageSize
        return self.items[start_idx:end_idx]

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1

    def nextPage(self):
        if self.currentPage < self.totalPages():
            self.currentPage += 1

    def firstPage(self):
        self.currentPage = 1

    def lastPage(self):
        self.currentPage = self.totalPages()

    def goToPage(self, pageNum):
        if 1 <= pageNum <= self.totalPages():
            self.currentPage = pageNum

    def totalPages(self):
        return (len(self.items) + self.pageSize - 1) // self.pageSize

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())

p.nextPage()
print(p.getVisibleItems())
print(p.getVisibleItems())
p.firstPage()
print(p.getVisibleItems()) 
p.goToPage(2)
print(p.getVisibleItems()) 
p.goToPage(5)
print(p.getVisibleItems())  
