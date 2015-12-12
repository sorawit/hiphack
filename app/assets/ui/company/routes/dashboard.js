const React = require('react')
const { Link } = require('react-router')

const Menubar = require('../components/menubar')

class CandidateFilter extends React.Component {
  getFilterMap() {
    const map = { position: {}, status: {} }
    this.props.data.map((d) => {
      map.position[d.position] ? map.position[d.position]++ : map.position[d.position] = 1
      map.status[d.status] ? map.status[d.status]++ : map.status[d.status] = 1
    })
    return map
  }
  searchFor(keyword) {
    this.props.getCandidateTable().searchFor(keyword)
  }
  render() {
    const filterMap = this.getFilterMap()
    return (
      <div className="candidate-filter">
        <h3>
          ตำแหน่งที่มีการสมัคร
        </h3>
        <ul>
          {
            Object.keys(filterMap.position).map((p) => {
              return (
                <li>
                  <i className="ion ion-android-person" />
                  <a onClick={this.searchFor.bind(this, p)}>
                    {p} ({filterMap.position[p]})
                  </a>
                </li>
              )
            })
          }
        </ul>
        <h3>
          สถานะของการสมัคร
        </h3>
        <ul>
          {
            Object.keys(filterMap.status).map((s) => {
              return (
                <li>
                  <i className="ion ion-chatbox-working" />
                  <a onClick={this.searchFor.bind(this, s)}>
                    {s} ({filterMap.status[s]})
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class CandidateTable extends React.Component {
  componentDidMount() {
    $(React.findDOMNode(this.refs.table)).DataTable({
      "language": {
        "lengthMenu": "แสดง _MENU_ คนต่อหน้า",
        "zeroRecords": "Nothing found - sorry",
        "info": "หน้า _PAGE_  จาก _PAGES_",
        "infoEmpty": "No records available",
        "infoFiltered": "(ผลการค้นหาจากทั้งหมด _MAX_ รายการ)",
        "search": "",
        "searchPlaceholder": "ค้นหาผู้สมัคร",
        "paginate": {
          "next": "ถัดไป",
          "previous": "ก่อนหน้า"
        }
      }
    })
  }
  searchFor(keyword) {
    $(React.findDOMNode(this)).find('.dataTables_filter input').val(keyword).trigger('keyup');
  }
  getTableBody() {
    return (
      <tbody>
        {this.props.data.map( (d, i) => {
          return (
            <tr>
              <td>
                <Link to={"/company/candidate/"+d.id}>
                  {d.name}
                </Link>
              </td>
              <td>{d.position}</td>
              <td>{d.status}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }
  render() {
    return (
      <div className="candidate-table">
        <div className="search-container">
        </div>
        <table ref="table">
          <thead>
            <tr>
              <th>ชื่อ</th>
              <th>ตำแหน่ง</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          {this.getTableBody()}
        </table>
      </div>
    )
  }
}

class CandidateExplorer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { candidateData: false }
  }
  fetchCandidateData() {
    setTimeout(function(){
      this.setState({
        candidateData: [
          {
            id: 1,
            name: "ศรัณยู ภูษิต",
            position: "Swift Developer",
            status: "รอสัมภาษณ์"
          },
          {
            id: 2,
            name: "สรวิทย์​ สุริยกาญจน์",
            position: "Backend Engineer",
            status: "On-site"
          },
          {
            id: 3,
            name: "กสิ ชนพิมาย",
            position: "Frontend Engineer",
            status: "รอการตอบรับ"
          },
          {
            id: 4,
            name: "สาวิตรี อ่ำกลาง",
            position: "Database Engineer",
            status: "On-site"
          },
          {
            id: 5,
            name: "มนัสนันท์ เทพสุริยะศาสตรา",
            position: "Database Engineer",
            status: "On-site"
          },
          {
            id: 6,
            name: "กวินพร ม้าน้ำผ่องใส",
            position: "Android Developer",
            status: "รอการตอบรับ"
          },
          {
            id: 7,
            name: "วิจิตร ตระการตา",
            position: "Frontend Engineer",
            status: "รอการตอบรับ"
          },
          {
            id: 8,
            name: "ยาวดี ศรีทนได้",
            position: "Frontend Engineer",
            status: "รอการตอบรับ"
          },
          {
            id: 9,
            name: "บริโภคชนา ขวัญราษฎ์",
            position: "Android Developer",
            status: "รอสัมภาษณ์"
          },
          {
            id: 10,
            name: "พิมพ์มาดา แสงสีทอง",
            position: "Backend Engineer",
            status: "รอสัมภาษณ์"
          },
          {
            id: 11,
            name: "วานิชญ์ เกษมสราญ",
            position: "Frontend Engineer",
            status: "รอการตอบรับ"
          },
          {
            id: 12,
            name: "น้ำหยด วงศาเทพหัสดิน",
            position: "Swift Developer",
            status: "รอการตอบรับ"
          }
        ]
      })
    }.bind(this), 500)
  }
  getCandidateFilter() {
    return this.refs.filter
  }
  getCandidateTable() {
    return this.refs.table
  }
  componentDidMount() {
    this.fetchCandidateData()
  }
  render() {
    return (
      this.state.candidateData ?
        <div className="candidate-explorer container">
          <CandidateFilter ref="filter" getCandidateTable={this.getCandidateTable.bind(this)} data={this.state.candidateData}/>
          <CandidateTable ref="table" getCandidateFilter={this.getCandidateFilter.bind(this)} data={this.state.candidateData}/>
        </div>
      :
        <div className="container">
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </div>
    )
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <div className="page-container dashboard">
        <Menubar page="Dashboard" />
        <CandidateExplorer />
      </div>
    )
  }
}

module.exports = Dashboard
