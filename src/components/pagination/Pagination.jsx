import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';

const scrollToTop = (duration = 800) => {
  const start = window.scrollY;
  if (start === 0) return;
  const startTime = performance.now();
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start * (1 - easeInOutQuad(progress)));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    scrollToTop();
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    scrollToTop();
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        key="prev"
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow right" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={`dots-${index}`} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => {
              scrollToTop();
              onPageChange(pageNumber);
            }}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        key="next"
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow left" />
      </li>
    </ul>
  );
};

export default Pagination;
