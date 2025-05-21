export interface Book {
  id?: number,
  title: string,
  isbn: string,
  author: string,
  coverUrl: string,
  pagesCount: number,
  subjects: number[],
  shelves: number[]
}