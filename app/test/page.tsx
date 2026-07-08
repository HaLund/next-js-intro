// import '@/styles/globals.css'
import Profile from '@/components/profile_component'

export default function TestPage() {
  return (
    <main>
      <h1>Notable Scientists</h1>
      <Profile
        person = {{ 
          name: 'Maria Skłodowska-Curie', 
          profession: 'physicist and chemist',
          noOfAwards: 4,
          awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'
        }}
        image = {{
          url: 'Images/szV5sdGs.jpg',
          alt: 'Maria Skłodowska-Curie',
        }}
        />
        <Profile
        person = {{
          name: 'Albert Einstein', 
          profession: 'theoretical physicist',
            noOfAwards: 1,
            awards: 'Nobel Prize in Physics'
        }}
        image = {{
          url: 'YfeOqp2',
            alt: 'Albert Einstein',
        }}
        />
    </main>
  );
}