function menubarDropdownHandler(id, arrow) {
    const dropdownContainer = document.getElementById(id);
    const dropdownArrow = document.getElementById(arrow);
    if (!dropdownArrow.classList.contains('rotate-180')) {
        dropdownArrow.classList.add('rotate-180');
        dropdownContainer.classList.remove('h-0');
        dropdownContainer.classList.add('h-auto');
        dropdownContainer.classList.add('py-[23px]');
    }
    else {
        dropdownArrow.classList.remove('rotate-180')
        dropdownContainer.classList.add('h-0');
        dropdownContainer.classList.remove('h-auto');
        dropdownContainer.classList.remove('py-[23px]');
    }
}

function handleInstallmentToggle() {
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');
    const installmentToggle = document.getElementById('installmentToggle');
    if (!installmentToggle.classList.contains('right-0')) {
        installmentToggle.classList.remove('left-0');
        installmentToggle.classList.add('right-0');
        if(!installmentToggle.classList.contains('border-[#FF6036]')){
            monthly.classList.remove('text-white');
            monthly.classList.add('text-[#BABAC6]');
            yearly.classList.remove('text-[#BABAC6]');
            yearly.classList.add('text-white');
        }
        else{
            monthly.classList.remove('text-[#FF6036]');
            monthly.classList.add('text-[#7C7C7C]');
            yearly.classList.remove('text-[#7C7C7C]');
            yearly.classList.add('text-[#FF6036]');
        }
    }
    else {
        installmentToggle.classList.remove('right-0');
        installmentToggle.classList.add('left-0');
        if(!installmentToggle.classList.contains('border-[#FF6036]')) {
            yearly.classList.remove('text-white');
            yearly.classList.add('text-[#BABAC6]');
            monthly.classList.remove('text-[#BABAC6]');
            monthly.classList.add('text-white');
        }
        else{
            yearly.classList.remove('text-[#FF6036]');
            yearly.classList.add('text-[#7C7C7C]');
            monthly.classList.remove('text-[#7C7C7C]');
            monthly.classList.add('text-[#FF6036]');
        }
    }
}


function mobileMenubarHandler(id) {
    const menubar = document.getElementById(id);
    if (!menubar.classList.contains('left-0')) {
        menubar.classList.remove('-left-[1024px]');
        menubar.classList.add('left-0');
    }
    else {
        menubar.classList.remove('left-0');
        menubar.classList.add('-left-[1024px]');
    }
}

function accordionHandler(accordion) {
    const accordionSign = accordion.children[0].children[1];
    const accordionCard = accordion.children[1];
    if (!accordionSign.classList.contains('rotate-45')) {
        accordionSign.classList.add('rotate-45');
        accordionCard.classList.remove('hidden', 'h-0');
        accordionCard.classList.add('mt-6')
    }
    else {
        accordionSign.classList.remove('rotate-45');
        accordionCard.classList.add('hidden', 'h-0');
        accordionCard.classList.remove('mt-6')
    }
}
function accordionHandler180(accordion) {
    const accordionSign = accordion.children[0].children[1];
    const accordionCard = accordion.children[1];
    if (!accordionSign.classList.contains('rotate-180')) {
        accordionSign.classList.add('rotate-180');
        accordionCard.classList.remove('hidden', 'h-0');
        accordionCard.classList.add('mt-6')
    }
    else {
        accordionSign.classList.remove('rotate-180');
        accordionCard.classList.add('hidden', 'h-0');
        accordionCard.classList.remove('mt-6')
    }
}

function handleSignUp() {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const signUpText = document.getElementById('sign-up-text');
    const signInText = document.getElementById('sign-in-text');

    if (!signIn.classList.contains('hidden')) {
        signIn.classList.add('hidden');
        signInText.classList.remove('text-[#262729]');
        signInText.classList.add('text-[#BDBCBC]');
    }

    if (signUp.classList.contains('hidden')) {
        signUp.classList.remove('hidden');
        signUpText.classList.remove('text-[#BDBCBC]');
        signUpText.classList.add('text-[#262729]');
    }
    else {
        signUp.classList.add('hidden');
        signUpText.classList.remove('text-[#262729]');
        signUpText.classList.add('text-[#BDBCBC]');
    }

}
function handleSignIn() {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const signUpText = document.getElementById('sign-up-text');
    const signInText = document.getElementById('sign-in-text');

    if (!signUp.classList.contains('hidden')) {
        signUp.classList.add('hidden');
        signUpText.classList.remove('text-[#262729]');
        signUpText.classList.add('text-[#BDBCBC]');
    }

    if (signIn.classList.contains('hidden')) {
        signIn.classList.remove('hidden');
        signInText.classList.remove('text-[#BDBCBC]');
        signInText.classList.add('text-[#262729]');
    }
    else {
        signIn.classList.add('hidden');
        signInText.classList.remove('text-[#262729]');
        signInText.classList.add('text-[#BDBCBC]');

    }

}

function handleHiddenModal() {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const signUpText = document.getElementById('sign-up-text');
    const signInText = document.getElementById('sign-in-text');
    if (!signUp.classList.contains('hidden')) {
        signUp.classList.add('hidden');
        signUpText.classList.remove('text-[#262729]');
        signUpText.classList.add('text-[#BDBCBC]');
    }

    if (!signIn.classList.contains('hidden')) {
        signIn.classList.add('hidden');
        signInText.classList.remove('text-[#262729]');
        signInText.classList.add('text-[#BDBCBC]');
    }
}

function tabHandler(currentTab, currentTabContent) {
    const tabs = document.getElementById("tab_container");
    const tab_items = tabs.getElementsByClassName('tab_item');
    const tabs_content = document.getElementById('tab_content_container');
    const tabs_content_item = tabs_content.getElementsByClassName('tab_content');
    const current_content = document.getElementById(currentTabContent);
    for (let i = 0; i < tab_items.length; i++) {
        const element = tab_items[i];
        if (element.classList.contains('border-b-2')) {
            element.classList.remove('border-b-2');
            element.classList.remove('border-[#FF6036]');
        }
    }
    if (!currentTab.classList.contains('border-b-2')) {
        currentTab.classList.add('border-b-2');
        currentTab.classList.add('border-[#FF6036]');
    }
    for (let i = 0; i < tabs_content_item.length; i++) {
        const element = tabs_content_item[i];
        if (element.classList.contains('block')) {
            element.classList.remove('block');
            element.classList.add('hidden');
        }
    }
    if (!current_content.classList.contains('block')) {
        current_content.classList.remove('hidden');
        current_content.classList.add('block');
    }
}