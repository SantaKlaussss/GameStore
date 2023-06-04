import React from "react";
import './home-page.css';
import GameItem from "../../components/game-item/GameItem";
import { useSelector } from "react-redux";
import Pagination from "../../components/pagination/pagination";
import { current } from "@reduxjs/toolkit";

export const GAMES = [
  {
    image: 'https://avatars.mds.yandex.net/i?id=5b9c8f7fb74481148f4e486ae2c097019f535ee9-7946262-images-thumbs&n=13',
    title: 'Forza Horizon 5',
    genres: ['Гонки', 'Симулятор', 'Открытый мир'],
    price: 2343,
    video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    id: 1,
    description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=ba850b7d4bd3fd2a697b828d9f3d8bb961b513e5-6849173-images-thumbs&n=13',
    title: 'Battlefield 2042',
    genres: ['Экшен', 'Шутер', 'Война'],
    video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
    price: 2433,
    id: 2,
    description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
  },
  {
    image: 'https://games.mail.ru/pre_0x736_resize/hotbox/content_files/game/2021/03/17/70bf0884bada4cc1b75719bbb5bc40da.jpg?quality=85',
    title: 'Life is Strange True Colors',
    genres: ['Глубокий сюжет', 'Протагонистка'],
    video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
    price: 3021,
    id: 3,
    description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
  },
  {
    image: 'https://mobimg.b-cdn.net/v3/fetch/45/450869451ceead57ef8b68cb51e52799.jpeg?w=1470&r=0.5625',
    title: 'Grand Theft Auto V',
    genres: ['Открытый мир', 'Экшен'],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    price: 789,
    id: 4,
    description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
    image: 'https://www.ggrecon.com/media/thsgxprc/highest-rank-rainbow-six-siege-r6-cover.jpg',
    title: 'Tom Clancy\'s Rainbow Six® Siege',
    video: 'https://www.youtube.com/embed/6wlvYh0h63k',
    genres: ['Тактика', 'Шутер'],
    price: 982,
    id: 5,
    description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 6,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 7,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 8,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 9,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 10,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 11,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 12,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 13,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 14,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 15,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
  {
    image: 'https://i.pinimg.com/originals/36/47/87/364787d8b68ebb31962830dfefb6dba0.jpg',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 16,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
]

const HomePage = () => {

  const currentPage = useSelector(store => store.games.currentPage)

  const pageSize = useSelector(store => store.games.pageSize);

  const lastGameIndex = currentPage * pageSize;
  const firstGameIndex = lastGameIndex - pageSize
  const currentGame = GAMES.slice(firstGameIndex, lastGameIndex)

  return (
    <div className="home-page">
      <div className="home-page__pagination">
        <Pagination/>
      </div>
      <div className="home-page__games">
        {currentGame.map(game => <GameItem key={game.id} game={game}/>)}
      </div>
      
    </div>
  )
}

export default HomePage;
