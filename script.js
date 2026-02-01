// ===== GLOBAL VARIABLES =====
let menuData = [];

// ===== DOM ELEMENTS =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');
const navContainer = document.querySelector('.nav-container');
const menuItemsContainer = document.getElementById('menuItemsContainer');
const categoryButtons = document.querySelectorAll('.category-btn');
const reservationForm = document.getElementById('reservationForm');
const submitBtn = document.getElementById('submitBtn');
const dateInput = document.getElementById('date');
const backToTopBtn = document.getElementById('backToTop');
const navLinkElements = document.querySelectorAll('.nav-link');

// ===== MENU DATA =====
const initializeMenuData = () => {
    menuData = [
        {
            id: 1,
            name: "Bruschetta Classica",
            description: "Toasted artisanal bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil.",
            price: "$12",
            category: "appetizers",
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            popular: true
        },
        {
            id: 2,
            name: "Truffle Pasta",
            description: "Handmade fettuccine with black truffle cream sauce, parmesan cheese, and fresh herbs.",
            price: "$28",
            category: "mains",
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            popular: true
        },
        {
            id: 3,
            name: "Grilled Salmon",
            description: "Atlantic salmon fillet with lemon butter sauce, roasted asparagus, and garlic mashed potatoes.",
            price: "$32",
            category: "mains",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx