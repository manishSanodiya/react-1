

const ExpensesFilter = (props)=>{
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2022">2021</option>
                    <option value="2022">2020</option>
                    <option value="2022">2019</option>
                    <option value="2022">2018</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter;