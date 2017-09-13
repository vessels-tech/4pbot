

export const allPastPaymentsQuery = (postcode, date) => {

  const query = `query allPastPayments($postcode: String!, $date: DateTime!) {
    allPayments(filter: {
      AND:[
        {postcode: $postcode},
        {expectedDate_lte: $date}
      ]}
      orderBy: expectedDate_DESC
    ) {
      id
     	postcode
      expectedDate
      dateReports {
        id
        type
        date
        weight
      }
      _dateReportsMeta {
        count
      }
    }
  }`;

  return {
    query,
    variables: {
      postcode,
      date
    }
  }
}
