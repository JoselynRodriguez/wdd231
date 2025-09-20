
export function setTitle(course) {
  const title = document.querySelector("#courseTitle");
  title.textContent = `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
  const list = document.querySelector("#sections");
  list.innerHTML = "";
  sections.forEach(section => {
    const item = document.createElement("li");
    item.textContent = `Section ${section.sectionNum} - Room ${section.roomNum} - Enrolled: ${section.enrolled}/${section.capacity}`;
    list.appendChild(item);
  });
}
