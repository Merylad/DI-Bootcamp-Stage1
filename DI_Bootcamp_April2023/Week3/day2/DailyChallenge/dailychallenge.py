from math import ceil

class Pagination :
    def __init__(self, items = None,page_size=10):
        self.items = items
        self.page_size = page_size
        self.total_pages = ceil(len(self.items)/self.page_size)
        self.current_page = 1


    def getVisibleItems(self):
        end_index = self.page_size * self.current_page
        start_index = end_index - self.page_size
        return self.items[start_index : end_index]
    
    def prevPage(self):
        if self.current_page >1 :
            self.current_page -=1
        else:
            self.current_page =1
        return self
        

    def nextPage(self):
        if self.current_page >self.total_pages :
            self.current_page =self.total_pages 
        else:
            self.current_page +=1
        return self

    def lastPage(self):
        self.current_page = self.total_pages

    def gotoPage(self, number):
        page_num = int(number)
        if page_num < 1 :
            self.current_page = 1
        if page_num > self.total_pages:
            self.current_page = self.total_pages
        else:
            self.current_page = page_num



alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)


print(p.getVisibleItems())
# ["a", "b", "c", "d"]

p.nextPage()
print(p.getVisibleItems())
# ["e", "f", "g", "h"]

p.nextPage().nextPage()
print(p.getVisibleItems())
# ['m', 'n', 'o', 'p']

p.lastPage()
print(p.getVisibleItems())
# ["y", "z"]

p.gotoPage(4)
print(p.getVisibleItems())
# ['m', 'n', 'o', 'p']