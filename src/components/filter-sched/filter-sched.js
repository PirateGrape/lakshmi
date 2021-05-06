import React, { Component } from 'react';
import FilterPrac from './filter-prac';
import FilterMas from './filter-master';
import FilterResetButton from './filter-reset'

export default class FilterSched extends Component {

    render() {

        const { onFilterSched, onReset } = this.props;

        return (
            <>
                <FilterPrac onFilterSched={onFilterSched} />

                <FilterMas onFilterSched={onFilterSched} />

                <FilterResetButton onReset={onReset} />

            </>
        )
    }
}