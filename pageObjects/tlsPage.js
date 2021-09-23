 /* eslint-env jquery */

class TLSPage {
  get tlsHome() {
    return 'https://www.cdn77.com/tls-test'
  }

  get domainName() {
    return $('input[name="domain"]')
  }

  get submit() {
    return $('button[type="submit"]')
  }

  get tls12() {
    return $('.mb-6.mb-md-7 > .TlsTestResultsTable_table__3Sxyn > tbody > tr:nth-of-type(2) > .TlsTestResultsTable_cell__3BHDd.TlsTestResultsTable_resultCell__2r1S- > .TlsTestResultsTable_green__2KHCJ')
  }
  
  get tls11() {
    return $('tr:nth-of-type(3) > .TlsTestResultsTable_cell__3BHDd.TlsTestResultsTable_resultCell__2r1S- > .TlsTestResultsTable_green__2KHCJ')
  }

  get tls10() {
    return $('tr:nth-of-type(4) > .TlsTestResultsTable_cell__3BHDd.TlsTestResultsTable_resultCell__2r1S- > .TlsTestResultsTable_green__2KHCJ')
  }

  get newTestButton() {
    return $('a[data-testid="Another test"]')
  }

  newTest() {
    this.newTestButton.click()
  }
}

module.exports = new TLSPage();
