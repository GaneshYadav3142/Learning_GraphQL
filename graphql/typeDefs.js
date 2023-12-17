

export const typeDefs=`#graphql

type Book {
  title: String!,
  author: String!,
  chapters:[Chapter!]
}

type Chapter {
    title:String!
    book:String!
}

type Query {
    books : [Book]
    bookName(title:String!) : Book
    chapterByBookName(title:String!):[Chapter!]
}

type Mutation {
    add(addBook:addBookInput!) : Book
    deleteBook(title:String!) : [Book]
    
}
input addBookInput {
    title : String!,
    author : String!
}

`