package com.mingxu.bookshelves.dao;

import com.mingxu.bookshelves.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {


}
