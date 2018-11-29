module.exports = {

    assignDriver: (route, drivers) => {
        for (let driver of drivers) {
            if (!driver.daysOff.includes(route.day)) {
                return driver.id;
            }
        }
        return undefined;
    },

    assignTruck: (route, trucks) => {
        for (let truck of trucks) {
            if (truck.length <= route.dock_length) {
                return truck.id;
            }
        }
        return undefined;
    },

    createSchedule: (drivers, trucks, routes) => {
        let shifts = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
        // iterate over every shift, currently the shifts correspond 1 to 1 with days of the week
        for (let i = 0; i < shifts.length; i++) {
            // every new shift we're going to start with a fresh batch of new drivers, currently this is simple because there are no overlapping shifts
            let tempDrivers = drivers;
            let tempTrucks = trucks;
            // we only want to iterate over the sub-array of routes which match the current shift we are trying to plan
            for (let route of routes.filter(route => route.day === shifts[i])) {
                // trucks and drivers do not currently have any restriction on one another so they can be assigned seperately
                route.driver_id = assignDriver(route, tempDrivers);
                tempDrivers = tempDrivers.filter(d => d.id !== route.driver_id);
                route.truck_id = assignTruck(route, tempTrucks);
                tempTrucks = tempTrucks.filter(t => t.id !== route.truck_id);
            }
        }
    }
    // now we need to figure out how to write this new data into the database. Figure out what changes the function above made to the 'routes' object and how we can use that data.
}