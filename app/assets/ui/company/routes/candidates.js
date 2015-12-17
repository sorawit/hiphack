const React = require('react')
const { Link } = require('react-router')
const Loader = require('../components/loader')
const Rating = require('../components/rating')

const Menubar = require('../components/menubar')
const StatusTimeline = require('../components/status-timeline')
const ActivityTimeline = require('../components/activity-timeline')
const AddCandidateModal = require('../components/add-candidate-modal')

const Ace = require('brace')

class OverviewTab extends React.Component {
  render() {
    return (
      <div className="tab overview">
        <h1>สถานะปัจจุบัน</h1>
        <StatusTimeline />
        <h1>บันทึกกิจกรรมล่าสุด</h1>
        <ActivityTimeline candidate={this.props.candidate} />
      </div>
    )
  }
}

class CodingInterviewResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedQuestion: 0
    }
  }
  componentDidMount() {
    var editor = Ace.edit('code')
    editor.getSession().setMode('ace/mode/javascript')
    editor.setTheme('ace/theme/tomorrow_night_bright')
  }
  componentDidUpdate() {
    Ace.edit('code').destroy()
    this.refs.code.getDOMNode().innerHTML = this.props.questions[this.state.selectedQuestion].result.code
    var editor = Ace.edit('code')
    editor.getSession().setMode('ace/mode/javascript')
    editor.setTheme('ace/theme/tomorrow_night_bright')
  }
  getQuestionSelector() {
    var options = [];
    for(var i=0; i<this.props.questions.length; i++) {
      options.push(
        <div className={"option" + (this.state.selectedQuestion === i ? " selected" : "")}
             onClick={this.setState.bind(this, {selectedQuestion: i}, () => {})}>{i+1}</div>
      );
    }
    return (
      <div className="question-selector">
        {options}
      </div>
    )
  }
  render() {
    var question = this.props.questions[this.state.selectedQuestion]
    return (
      <div className="interview-result coding">
        <div className="info">
          <div className="label">ผู้สัมภาษณ์</div>
          <div className="value">ม้าน้ำ จ้าแสงแรงศักดา, มาดามแมว, จินดามนี ศรีแมงกระพรุนทอง</div>
        </div>
        <div className="info">
          <div className="label">เวลา</div>
          <div className="value">9:00 - 11:23 (2:23 ชั่วโมง)</div>
        </div>
        <div className="questions-container">
          {this.getQuestionSelector()}
          <div className="time"><i className="ion ion-android-stopwatch" />{question.result.time}</div>
          <div className="body">{question.body}</div>
          <div className="code" id="code" ref="code">{question.result.code}</div>
        </div>
      </div>
    )
  }
}

class InterviewComments extends React.Component {
  render() {
    var comments = this.props.comments.map((comment) => {
      return (
        <div className="comment">
          <div className="display-image" style={{backgroundImage: 'url('+comment.user.display_image+')'}} />
          <div className="detail">
            <div className="user">{comment.user.name}</div>
            <div className="rating"><Rating rating={comment.rating} /></div>
            <div className="body">{comment.body}</div>
          </div>
        </div>
      )
    })
    return (
      <div className="interview-comments">
        {comments}
      </div>
    )
  }
}

class InterviewTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code_interview_questions: [
        {
          body: 'ม้านิลมังกรมีหางทั้งหมด 9 หาง แต่ละหางมักทะเลาะกันไม่จบสิ้น เพื่อฝึกความสามัคคีสุดสาครจึงให้หางแต่ละตัวไปหาจำนวนเฉพาะที่ไม่ซ้ำกัน และรวมกันได้เท่ากับ 10001 เท่าของตัวที่มีค่าน้อยที่สุดบวกกับ 2 เท่าของตัวที่มีค่ามากที่สุด ขอให้คุณเขียนโปรแกรมช่วยหางม้านิลมัลกรหาจำนวนเหล่านั้นที',
          result: {
            time: '23 นาที',
            code: '/* This is so ez\n' +
                  ' * You should hire me because ...\n' +
                  ' * I AM SO FREAKING SMART\n' +
                  ' * :) */\n\n' +
                  'console.log("2, 127, 1223, 2789, 5023, 5333, 5653, 5881, 6029")'
          }
        },
        {
          body: 'ถ้า A แทน 1, B แทน 2 ... Z แทน 26\n     AA แทน 27, AB แทน 28  ...\n     SEXY แทนอะไร',
          result: {
            time: '5 นาที',
            code: '/* Hey recruiters\n' +
                  ' * ARE YOU FREAKING KIDDING ME? ...\n' +
                  ' * Let\'s get over with stupid questions \n' +
                  ' * :/ */\n\n' +
                  'console.log("12876")'
          }
        }
      ],
      comments : [
        {
          user: {
            id: 1,
            name: "มนีรัตน์ อู่เต่าบิน",
            display_image: "https://scontent-lga3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/65609_539354492801591_1108515227_n.jpg?oh=0b22fbeda4b9b74ae49f23f908eec5ea&oe=571EB5DF"
          },
          rating: 1,
          to: "โจทย์ข้อที่ 1",
          body: "คอมเม้นต์ในโค้ดหยาบคายมาก"
        },
        {
          user: {
            id: 2,
            name: "อู่เต่าบิน ตัวจริงมีสี่ขา",
            display_image: "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/11219068_10156181014475111_7361129537478101803_n.jpg?oh=246fbd68b38babb84f20c6352de62445&oe=571D4E66"
          },
          rating: 4,
          body: "ใช้เวลาทำโจทย์น้อยมาก แถมยังมีความจริงใจ รักในการทำงาน เอาใจไปเลย"
        }
      ]
    }
  }
  render() {
    return (
      <div className="tab interview">
        <h1>การสัมภาษณ์</h1>
        <select className="date-select">
          <option>8 ต.ค. 58</option>
          <option>1 พ.ย. 58</option>
          <option>9 พ.ย. 58</option>
        </select>
        <CodingInterviewResult candidate={this.props.candidate} questions={this.state.code_interview_questions}/>
        <h1>ความเห็น</h1>
        <InterviewComments candidate={this.props.candidate} comments={this.state.comments}/>
      </div>
    )
  }
}

class CommentTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments : [
        {
          user: {
            id: 1,
            name: "มนีรัตน์ อู่เต่าบิน",
            display_image: "https://scontent-lga3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/65609_539354492801591_1108515227_n.jpg?oh=0b22fbeda4b9b74ae49f23f908eec5ea&oe=571EB5DF"
          },
          rating: 5,
          body: "เป็นมิตรต่อสิ่งแวดล้อมดีมาก น้ำเห็นวันนึงเค้าเดินเก็บขวดน้ำใส่ถุงใหญ่มากๆ หิ้วใส่รถกระบะ ข้างหลังมีกล่อง ลัง ขยะแห้งเต็มไปหมด เค้าต้องเป็นคนดีที่โลกรอแน่ๆจุงเบย"
        },
        {
          user: {
            id: 2,
            name: "อู่เต่าบิน ตัวจริงมีสี่ขา",
            display_image: "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/11219068_10156181014475111_7361129537478101803_n.jpg?oh=246fbd68b38babb84f20c6352de62445&oe=571D4E66"
          },
          rating: 3,
          body: "มีสติดีมาก แม้กระทั่งเวลาเจอเต่าบินได้ก็ยังตกหลุมรักโดยไม่มีเงื่อนไข เสียแค่เราไม่ค่อยชอบเค้าอ่ะ :("
        }
      ]
    }
  }
  render() {
    var comments = this.state.comments.map((comment) => {
      return (
        <div className="comment">
          <div className="display-image" style={{backgroundImage: 'url('+comment.user.display_image+')'}} />
          <div className="detail">
            <div className="user">{comment.user.name}</div>
            <div className="rating"><Rating rating={comment.rating} /></div>
            <div className="body">{comment.body}</div>
          </div>
        </div>
      )
    })
    var userDisplayImage = "https://scontent-lga3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/65609_539354492801591_1108515227_n.jpg?oh=0b22fbeda4b9b74ae49f23f908eec5ea&oe=571EB5DF"
    return (
      <div className="tab comment">
        <h1>ความคิดเห็นต่อผู้สมัคร</h1>
        <div className="comment">
          <div className="display-image" style={{backgroundImage: 'url('+userDisplayImage+')'}} />
          <div className="detail">
            <div className="rating"><Rating editable={true}/></div>
            <div className="desc">ให้คะแนนผู้สมัคร</div>
            <textarea rows="3" className="input" placeholder="เพิ่มความเห็น"/>
          </div>
        </div>
        {comments}
      </div>
    )
  }
}

class CandidateViewTab extends React.Component {
  getLinkToTab(tab, text, icon) {
    var activeClass = (tab === this.props.params.tab ? "active" : "")
    return (
      <li className={"tab-container "+activeClass}>
        <Link to={`/company/candidates/${this.props.params.candidateId}/${tab}`}>
          <i className={icon ? icon : ""} />
          {text}
        </Link>
      </li>
    )
  }
  onStatusSelect() {

  }
  render() {
    return (
      <div className="tab-container">
        <div className="status button blue" onClick={this.onStatusSelect.bind(this)}>
          ดำเนินการ
        </div>
        <div className="recruiter">
          <h3>ผู้รับผิดชอบ</h3>
          <div>
            <div className="display-image" style={{backgroundImage: 'url('+this.props.candidate.recruiter.display_image+')'}} />
            {this.props.candidate.recruiter.name}
          </div>
        </div>
        <div className="tab-select">
          <ul>
            {[
              this.getLinkToTab("overview","ภาพรวม","ion ion-ios-home-outline"),
              this.getLinkToTab("resume","ประวัติย่อ (Resume)","ion ion-document"),
              this.getLinkToTab("interview","การสัมภาษณ์","ion ion-code"),
              this.getLinkToTab("comment","ความคิดเห็น","ion ion-ios-chatboxes-outline")
            ]}
          </ul>
        </div>
      </div>
    )
  }
}

class CandidateViewInfo extends React.Component {
  getTab() {
    if(this.props.tab === 'overview') {
      return (<OverviewTab candidate={this.props.candidate} />)
    } else if(this.props.tab === 'interview') {
        return (<InterviewTab candidate={this.props.candidate} />)
    } else if(this.props.tab === 'comment') {
        return (<CommentTab candidate={this.props.candidate} />)
    } else {
      return (<div className="tab">{this.props.tab}</div>)
    }
  }
  render() {
    const candidate = this.props.candidate
    const image_style = candidate && { backgroundImage: "url('"+candidate.display_image+"')" }
    return (
      <div className="candidate-info">
        <div className="general-info">
          <div className="display-image" style={image_style} />
          <div className="info">
            <div className="name">
              <h1>{candidate.name}</h1>
            </div>
            <div className="position">
              {candidate.position}
            </div>
          </div>
        </div>
        {this.getTab()}
      </div>
    )
  }
}

class CandidateNotFound extends React.Component {
  render() {
    return (
      <div className="candidate-view">
        <div className="candidate-not-found">
          กรุณาเลือกหรือเพิ่มผู้สมัคร
          <i className="ion ion-arrow-right-a" />
        </div>
      </div>
    )
  }
}

class CandidateView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      candidate: undefined
    }
  }
  fetchCandidateData() {
    this.setState({
      candidate: {
        id: 1,
        name: "ศรัณยู ภูษิต",
        position: "Software Developer Intern",
        status: "รอสัมภาษณ์",
        resume_url: "/static/resumes/gott.pdf",
        display_image: "https://scontent-lga3-1.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/10460378_1086650394680517_6853281743052289354_n.jpg?oh=ea315d590ac5e339a241859d43b8ac87&oe=56B4C420",
        recruiter: {
          id: 1,
          name: "มนีรัตน์ อู่เต่าบิน",
          display_image: "https://scontent-lga3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/65609_539354492801591_1108515227_n.jpg?oh=0b22fbeda4b9b74ae49f23f908eec5ea&oe=571EB5DF"
        }
      }
    })
  }
  componentDidMount() {
    this.fetchCandidateData()
  }
  render() {
    var tab = this.props.params.tab || 'overview'
    return (
      <div className="candidate-view">
        {
          this.state.candidate ?
          [ <CandidateViewInfo candidate={this.state.candidate} tab={tab} />,
            <CandidateViewTab candidate={this.state.candidate} params={this.props.params} /> ] :
          <Loader />
        }
      </div>
    )
  }
}

class CandidateSelectItem extends React.Component {
  render() {
    var candidate = this.props.candidate
    var className = "candidate-item" + (this.props.selected ? " selected" : "")
    return (
      <Link to={`/company/candidates/${candidate.id}/overview`} className={className}>
        <div className="status">
          { candidate.status }
        </div>
        <div className="name">
          { candidate.name }
        </div>
        <div className="position">
          { candidate.position }
        </div>
      </Link>
    )
  }
}

class CandidateSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'id',
      filter: '',
      addCandidateModalOpen: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount() {
    $(this.refs['search-results'].getDOMNode()).perfectScrollbar()
  }
  filteredAndSortedCandidates() {
    window.x = this.props.data
    return this.props.data.slice(0).filter(
      candidate => (candidate.name+candidate.status+candidate.position).indexOf(this.state.filter) > -1
    ).sort( (a, b) => String(a[this.state.sortBy]).localeCompare(String(b[this.state.sortBy])) )
  }
  handleSearch(event) {
    this.setState({filter: event.target.value})
  }
  onSortChange(event) {
    this.setState({sortBy: event.target.value})
  }
  openAddCandidateModal() {
    this.setState({
      addCandidateModalOpen: true
    })
  }
  closeAddCandidateModal() {
    this.setState({
      addCandidateModalOpen: false
    })
  }
  render() {
    return (
      <div className="candidate-select">
        <div className="filter">
          <input type="text" placeholder="ค้นหาผู้สมัคร" onChange={this.handleSearch.bind(this)}/>
          <select className="sort" onChange={this.onSortChange.bind(this)}>
            <option value="status">สถานะ</option>
            <option value="position">ตำแหน่ง</option>
            <option value="name">ชื่อ</option>
          </select>
        </div>
        <div className="add-candidate">
          <div className="button large grey" onClick={this.openAddCandidateModal.bind(this)}>
            <i className="ion ion-android-person-add" />
            เพิ่มผู้สมัคร
          </div>
          <AddCandidateModal open={this.state.addCandidateModalOpen}
                             onOpen={this.openAddCandidateModal.bind(this)}
                             onClose={this.closeAddCandidateModal.bind(this)} />
        </div>
        <div className="search-results" ref="search-results">
          {
            this.filteredAndSortedCandidates().map(
              candidate => <CandidateSelectItem candidate={candidate}
                                                selected={candidate.id == this.props.params.candidateId} />
            )
          }
        </div>
      </div>
    )
  }
}

class CandidateExplorer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  fetchCandidateData() {
    setTimeout(function(){
      var data = [
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
          status: "รอสัมภาษณ์"
        },
        {
          id: 4,
          name: "สาวิตรี อ่ำกลาง",
          position: "Database Engineer",
          status: "รอการตอบรับ"
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
          status: "On-site"
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
          status: "รอการตอบรับ"
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

      this.setState({
        candidateData: data
      })
    }.bind(this), 500)
  }
  componentDidMount() {
    this.fetchCandidateData()
  }
  render() {
    return (
      this.state.candidateData ?
        <div className="candidate-explorer container">
          <CandidateSelect ref="select" data={this.state.candidateData} params={this.props.params}/>
          {
            this.props.params.candidateId === undefined ?
            <CandidateNotFound /> :
            <CandidateView ref="view" candidate={this.state.selectedCandidate} params={this.props.params}/>
          }
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

class Candidates extends React.Component {
  render() {
    return (
      <div className="page-container full candidates">
        <CandidateExplorer params={this.props.params || {}}/>
      </div>
    )
  }
}

module.exports = Candidates
