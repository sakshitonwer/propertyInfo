<template>
    <div class="DisplayInfo">
        <h1> {{title}} </h1>
        <table class="table">
            <tbody>
                <tr v-if="details.air_conditioning">
                    <td>Air Conditioning</td>
                    <td>{{details.air_conditioning}}</td>
                </tr>
                <tr v-if="details.attic">
                    <td>Attic</td>
                    <td>{{details.attic}}</td>
                </tr>
                <tr v-if="details.basement != 'basement_not_specified'">
                    <td>Basement</td>
                    <td>{{details.basement}}</td>
                </tr>
                <tr v-if="details.building_area_sq_ft">
                    <td>Building area sq ft</td>
                    <td>{{details.building_area_sq_ft}}</td>
                </tr>
                <tr v-if="details.building_condition_score">
                    <td>Building Condition Score</td>
                    <td>{{details.building_condition_score}}</td>
                </tr>
                <tr v-if="details.building_quality_score">
                    <td>Building Quality Score</td>
                    <td>{{details.building_quality_score}}</td>
                </tr>
                <tr v-if="details.construction_type">
                    <td>Construction Type</td>
                    <td>{{details.construction_type}}</td>
                </tr>
                <tr v-if="details.exterior_walls">
                    <td>Exterior walls</td>
                    <td>{{details.exterior_walls}}</td>
                </tr>
                <tr v-if="details.fireplace">
                    <td>Fireplace</td>
                    <td>{{details.fireplace}}</td>
                </tr>
                <tr v-if="details.full_bath_count">
                    <td>Full Bath Count</td>
                    <td>{{details.full_bath_count}}</td>
                </tr>
                <tr v-if="details.garage_parking_of_cars">
                    <td>Garage Parking of Cars</td>
                    <td>{{details.garage_parking_of_cars}}</td>
                </tr>
                <tr v-if="details.garage_type_parking">
                    <td>Garage Type Parking</td>
                    <td>{{details.garage_type_parking.split('_').join(' ')}}</td>
                </tr>
                <tr v-if="details.heating">
                    <td>Heating</td>
                    <td>{{details.heating}}</td>
                </tr>
                <tr v-if="details.heating_fuel_type">
                    <td>Heating Fuel Type</td>
                    <td>{{details.heating_fuel_type}}</td>
                </tr>
                <tr v-if="details.no_of_buildings">
                    <td>Number of Building</td>
                    <td>{{details.no_of_buildings}}</td>
                </tr>
                <tr v-if="details.no_of_stories">
                    <td>Number of stories</td>
                    <td>{{details.no_of_stories}}</td>
                </tr>
                <tr v-if="details.number_of_bedrooms">
                    <td>Number of bedrooms</td>
                    <td>{{details.number_of_bedrooms}}</td>
                </tr>
                <tr v-if="details.number_of_units">
                    <td>Number of Units</td>
                    <td>{{details.number_of_units}}</td>
                </tr>
                <tr v-if="details.partial_bath_count">
                    <td>Partial Bath Count</td>
                    <td>{{details.partial_bath_count}}</td>
                </tr>
                <tr v-if="details.pool">
                    <td>Pool</td>
                    <td>{{details.pool}}</td>
                </tr>
                <tr v-if="details.property_type">
                    <td>Property Type</td>
                    <td>{{details.property_type}}</td>
                </tr>
                <tr v-if="details.roof_cover">
                    <td>Roof Cover</td>
                    <td>{{details.roof_cover}}</td>
                </tr>
                <tr v-if="details.roof_type">
                    <td>Root Type</td>
                    <td>{{details.roof_type}}</td>
                </tr>
                <tr v-if="details.sewer">
                    <td>Sewer</td>
                    <td>{{details.sewer}}</td>
                </tr>
                <tr v-if="details.site_area_acres">
                    <td>Site Area Acres</td>
                    <td>{{details.site_area_acres}}</td>
                </tr>
                <tr v-if="details.style">
                    <td>Style</td>
                    <td>{{details.style}}</td>
                </tr>
                <tr v-if="details.subdivision">
                    <td>Subdivision</td>
                    <td>{{details.subdivision}}</td>
                </tr>
                <tr v-if="details.total_bath_count">
                    <td>Total bath Count</td>
                    <td>{{details.total_bath_count}}</td>
                </tr>
                <tr v-if="details.total_number_of_rooms">
                    <td>Number of Rooms</td>
                    <td>{{details.total_number_of_rooms}}</td>
                </tr>
                <tr v-if="details.water">
                    <td>Water</td>
                    <td>{{details.water}}</td>
                </tr>
                <tr v-if="details.year_built">
                    <td>Year Built</td>
                    <td>{{details.year_built}}</td>
                </tr>
                <tr v-if="details.zoning">
                    <td>Zoning</td>
                    <td>{{details.zoning}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script src="./displayInfo.js"></script>
<style src="./displayInfo.scss"></style>
