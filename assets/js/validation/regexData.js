export const regexData = {
    firstname: /^[a-z ,.'-]+$/i,
    lastname: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/im,
    card: /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b$/im
   
}