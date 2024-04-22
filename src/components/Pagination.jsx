import PropTypes from 'prop-types';

const Pagination = ({ page, setPage, totalPages }) => {
    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page > 1 ? page - 1 : 1);
    
    return (
        <div className="button-container">
            <button onClick={prevPage} disabled={page === 1}>
                Previous
            </button>
            <button onClick={nextPage} disabled={Number(page) === Number(totalPages)}>
                Next
            </button>
        </div>
    );
};

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
};

export default Pagination;
