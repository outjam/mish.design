import React from 'react'

function FilterPage(bool) {
    return (
        <div className="filterPage">
            <form>
                <div class="">Sort</div>
                <select name="pets" id="pet-select">
                    <option value="">Сортировать</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
            </form>
        </div>
    )
}

export default FilterPage
