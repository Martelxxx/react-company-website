import './CompanyHistory.css';

const CompanyHistory = (props) => {
    const { history } = props;
    return (
        <div className="company-history">
            <h1>Company History</h1>
            <p>{history}</p>
        </div>
    );
}

export default CompanyHistory;