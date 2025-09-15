import React from 'react';
import './TechStack.css';

const techs = [
  { name: 'HTML5', description: '웹의 구조를 설계하는 마크업 언어' },
  { name: 'CSS3', description: '스타일과 레이아웃을 담당하는 스타일시트 언어' },
  { name: 'JavaScript', description: '동적인 웹을 위한 프로그래밍 언어' },
  { name: 'React', description: 'UI 구축을 위한 라이브러리' },
  { name: 'Redux', description: '상태 관리를 위한 라이브러리' },
  { name: 'TypeScript', description: '정적 타입을 지원하는 JavaScript의 상위 집합' },
  { name: 'Styled-Components', description: 'CSS-in-JS 스타일링 도구' },
  { name: 'Git', description: '버전 관리 시스템' },
];

function TechStack() {
  return (
    <div className="tech-stack-container">
      <h1>내 기술 스택</h1>
      <div className="tech-list">
        {techs.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <h2>{tech.name}</h2>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
