import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Api_url, citiesOptions } from "../Api";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState(null);

    // for updating new search values
    const updateSearch = (values) => {
        setSearch(values);
        onSearch(values)
    }

    // loading City Options 
    const loadOptions = async (inputValue) => {
        try {
	const response = await fetch(`${Api_url}?minPopulation=1000000&namePrefix=${inputValue}`, citiesOptions);
	const result = await response.json();
	console.log(result);
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            };
} catch (error) {
            console.error(error);
            return { options: [] };
        };
    }

    return  (
        <AsyncPaginate
            placeholder="Search City"
            debounceTimeout={500}
            value={search}
            onChange={updateSearch}
            loadOptions={loadOptions}
        />
    )
};

export default Search