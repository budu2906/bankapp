import {MaterialIcons} from '@expo/vector-icons'

export interface IService {
    iconName: keyof typeof MaterialIcons.glyphMap,
    title: string,
    percent: number

}

export const services: IService[] = [
 {
    iconName: 'movie',
    title: 'cinema',
    percent: 10

 },
 {
    iconName: 'fitness-center',
    title: 'Workouts',
    percent: 15
 },
 {
    iconName: 'pets',
    title: 'veterinarians',
    percent: 13
 }, {
    iconName: 'psychology',
    title: 'Psychologist',
    percent: 30
 }, {
    iconName: 'shopping-bag',
    title: 'Shopping',
    percent: 7
 }, {
    iconName: 'music-note',
    title: 'Concerts',
    percent:  35
 }, {
    iconName: 'sports-football',
    title: 'Sport',
    percent: 15
 }, {
    iconName: 'local-gas-station',
    title: 'Fuel',
    percent: 9
 },
]