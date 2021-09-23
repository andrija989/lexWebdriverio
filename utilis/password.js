module.exports = {
  generate(invitationId) {

    const guid = invitationId.split('-').join('');

    //  creates ascii letter from number

    let password = '';
    password += String.fromCharCode(
      65 + (parseInt(guid.substring(0, 2), 16) % 25)
    );
    password += String.fromCharCode(
      97 + (parseInt(guid.substring(4, 6), 16) % 25)
    );
    password += String.fromCharCode(
      97 + (parseInt(guid.substring(6, 8), 16) % 25)
    );
    password += String.fromCharCode(
      97 + (parseInt(guid.substring(8, 10), 16) % 25)
    );

    // creates number

    password += parseInt(guid.substring(10, 12), 16) % 10;
    password += parseInt(guid.substring(12, 14), 16) % 10;
    password += parseInt(guid.substring(14, 16), 16) % 10;
    password += parseInt(guid.substring(16, 18), 16) % 10;

    return password;
  }

}
