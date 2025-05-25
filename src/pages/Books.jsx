import React from 'react';
import booksData from '../assets/books/booksData';
import { useGlobalContext } from '../components/context'; // Assuming context is used for consistent styling or other global states

const Books = () => {
  const { isSidebarOpen } = useGlobalContext(); // Example usage of global context

  // Filter books by language if needed, or group them
  const arabicBooks = booksData.filter((book) => book.language === 'ar');
  const englishBooks = booksData.filter((book) => book.language === 'en');
  const frenchBooks = booksData.filter((book) => book.language === 'fr');

  const renderBookSection = (title, books) => (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center font-ptbldhad">
        {title}
      </h2>
      {books.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <a
              key={book.id}
              href={book.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={book.thumbnail}
                alt={book.name}
                className="w-full h-48 sm:h-56 md:h-64 object-contain mb-3 rounded group-hover:opacity-80 transition-opacity"
              />
              <h3 className="text-md sm:text-lg font-semibold text-green-700 text-center group-hover:text-green-900 transition-colors">
                {book.name}
              </h3>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          لا توجد كتب متاحة حاليًا في هذه اللغة.
        </p>
      )}
    </section>
  );

  return (
    <main
      className={`pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-green-50 min-h-screen ${
        isSidebarOpen ? 'ml-0 sm:ml-64' : 'ml-0'
      } transition-margin duration-300 ease-in-out`}
    >
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 font-ptbldhad">
            مكتبة الشيخ ياسين رشدي
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            تصفح وقراءة مجموعة من كتب الشيخ القيمة.
          </p>
        </header>

        {renderBookSection('الكتب العربية', arabicBooks)}
        {renderBookSection('English Books', englishBooks)}
        {renderBookSection('Livres Français', frenchBooks)}
      </div>
    </main>
  );
};

export default Books;
