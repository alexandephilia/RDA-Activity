// Sample data array
const cardData = [
    // First page (1-8)
    {
        title: "ESS Web/Mobile Development",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:00 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "SIAPP Web Development",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:00 AM",
        checkOut: "05:30 PM",
        activityStatus: "postponed",
        duration: "2d 8h",
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "HR System Integration",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:30 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "Financial Dashboard",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:00 AM",
        checkOut: "04:30 PM",
        activityStatus: "completed",
        duration: "1d 6h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 16:45"
        }
    },
    {
        title: "Security Audit System",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "10:00 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "Customer Portal Update",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:15 AM",
        checkOut: "06:00 PM",
        activityStatus: "completed",
        duration: "3d 4h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 18:15"
        }
    },
    {
        title: "Inventory Management",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:45 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "Analytics Platform",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "07:30 AM",
        checkOut: "03:30 PM",
        activityStatus: "completed",
        duration: "4d 2h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 10:30"
        }
    },
    // Second page (9-16)
    {
        title: "Mobile App Development",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:00 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "Cloud Infrastructure",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "07:45 AM",
        checkOut: "04:15 PM",
        activityStatus: "completed",
        duration: "5d 2h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 16:30"
        }
    },
    {
        title: "Data Migration Project",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:30 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "Network Security Update",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:15 AM",
        checkOut: "05:45 PM",
        activityStatus: "postponed",
        duration: "1d 4h",
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "UI/UX Enhancement",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "10:15 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "Database Optimization",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "07:00 AM",
        checkOut: "03:00 PM",
        activityStatus: "completed",
        duration: "2d 5h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 15:30"
        }
    },
    {
        title: "API Integration",
        status: "check-in",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "09:45 AM",
        checkOut: null,
        activityStatus: null,
        duration: null,
        approval: {
            status: "",
            approver: "",
            time: ""
        }
    },
    {
        title: "DevOps Pipeline",
        status: "check-out",
        employee: {
            name: "Elon Musk",
            code: "EM"
        },
        division: "RSF",
        checkIn: "08:30 AM",
        checkOut: "04:45 PM",
        activityStatus: "completed",
        duration: "3d 6h",
        approval: {
            status: "approved",
            approver: "Jensen Huang",
            time: "2024-03-15 17:00"
        }
    }
];

// First, let's add the additional employee data to our cardData objects
cardData.forEach(card => {
    card.employee = {
        ...card.employee,
        email: "elon.musk@realta.net",
        department: "Research & Development",
        manager: {
            name: "Jensen Huang",
            email: "jensen.huang@realta.net"
        }
    };
});

// First, let's add the additional activity data to our cardData objects
cardData.forEach(card => {
    card.activity = {
        ...card.activity,
        application: "ESS Web/Mobile",
        programId: "PRG-2024-001",
        huddle: "Daily Standup Meeting",
        project: {
            sproBest: "RSF",
            name: "Customer Portal Enhancement"
        },
        category: {
            type: "Enhancement/New Feature",
            area: "Production"
        },
        softwareDev: true,
        note: "Implementing new features for customer portal including authentication improvements and dashboard optimization.",
        description: "Detailed explanation of the activity including technical specifications and implementation details for the customer portal enhancement project."
    };
});

// Configuration
const ITEMS_PER_PAGE = 8;
let currentPage = 1;
let filteredData = [...cardData]; // Store filtered data

// State management for SPA
let currentView = 'list'; // 'list' or 'detail'
let selectedCard = null;

// Function to filter data based on search query
function filterData(query) {
    if (!query) {
        filteredData = [...cardData];
        return;
    }
    
    query = query.toLowerCase().trim();
    filteredData = cardData.filter(card => {
        return (
            card.title.toLowerCase().includes(query) ||
            card.employee.name.toLowerCase().includes(query) ||
            card.employee.code.toLowerCase().includes(query) ||
            card.division.toLowerCase().includes(query) ||
            (card.activityStatus && card.activityStatus.toLowerCase().includes(query)) ||
            (card.checkIn && card.checkIn.toLowerCase().includes(query)) ||
            (card.checkOut && card.checkOut.toLowerCase().includes(query))
        );
    });
}

// Function to perform search
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value;
    currentPage = 1; // Reset to first page when searching
    filterData(query);
    renderCards();
}

// Function to generate skeleton card HTML
function generateSkeletonCardHTML() {
    return `
        <div class="col-12 col-xl-3 col-lg-4">
            <div class="card h-100 p-3 skeleton-card">
                <div class="card-body p-0">
                    <div class="d-flex justify-content-between">
                        <div class="skeleton-title skeleton" style="width: 60%;"></div>
                        <div class="skeleton-badge skeleton"></div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div class="skeleton-text skeleton medium"></div>
                        <div class="skeleton-badge skeleton" style="width: 60px;"></div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <div class="skeleton-text skeleton short"></div>
                        <div class="skeleton-text skeleton short"></div>
                    </div>
                    <div class="skeleton-divider"></div>
                    <div class="mt-3">
                        <div class="d-flex justify-content-between">
                            <div class="skeleton-text skeleton short"></div>
                            <div class="skeleton-text skeleton short"></div>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <div class="skeleton-text skeleton short"></div>
                            <div class="skeleton-text skeleton short"></div>
                        </div>
                        <div class="skeleton-approval">
                            <div class="d-flex justify-content-between">
                                <div class="skeleton-text skeleton short"></div>
                                <div class="skeleton-badge skeleton"></div>
                            </div>
                            <div class="skeleton-text skeleton medium mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to show skeleton loading
function showSkeletonLoading() {
    const container = document.getElementById('cardsContainer');
    const skeletonHTML = Array(ITEMS_PER_PAGE).fill(generateSkeletonCardHTML()).join('');
    container.innerHTML = skeletonHTML;
}

// Function to refresh data
function refreshData() {
    const searchInput = document.querySelector('.search-input');
    const refreshButton = document.querySelector('.btn-refresh');
    
    // Clear search input
    searchInput.value = '';
    
    // Show skeleton loading
    showSkeletonLoading();
    
    // Add rotation animation to refresh button
    const icon = refreshButton.querySelector('i');
    icon.style.transition = 'transform 0.5s ease';
    icon.style.transform = 'rotate(360deg)';
    
    // Simulate loading delay and then reset data
    setTimeout(() => {
        // Reset to original data
        filteredData = [...cardData];
        currentPage = 1;
        
        // Render cards
        renderCards();
        
        // Reset refresh button
        icon.style.transform = '';
    }, 1000); // Show skeleton for 1 second
}

// Function to generate a single card HTML
function generateCardHTML(data) {
    const cardHtml = `
        <div class="col-12 col-xl-3 col-lg-4">
            <div class="card h-100 p-3 cursor-pointer" data-card-id="${cardData.indexOf(data)}">
                <div class="card-body p-0">
                    <div class="d-flex justify-content-between">
                        <div class="time-info">
                            <h5 class="card-title">${data.title}</h5>
                        </div>
                        <div class="time-info text-end">
                            <span class="status-badge status-${data.status}">${data.status === 'check-in' ? 'Check In' : 'Check Out'}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <div class="d-flex align-items-center gap-2">
                            <span class="employee-name">${data.employee.name}</span>
                            <span class="vertical-separator"></span>
                            <span class="employee-code">${data.employee.code}</span>
                        </div>
                        <div class="division-info">
                            <span class="division-badge">${data.division}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="time-info">
                            <span class="time-label">Check In:</span>
                            <span class="time-value">${data.checkIn}</span>
                        </div>
                        <div class="time-info text-end">
                            <span class="time-label">Check Out:</span>
                            <span class="time-value">${data.checkOut || '-'}</span>
                        </div>
                    </div>
                    <div class="card-divider"></div>
                    <div class="mt-3">
                        <div class="d-flex justify-content-between">
                            <span class="activity-status">Activity Status</span>
                            ${data.activityStatus ? `
                                <span class="activity-status status-${data.activityStatus}">
                                    ${data.activityStatus.charAt(0).toUpperCase() + data.activityStatus.slice(1)}
                                </span>
                            ` : '<span class="activity-status">-</span>'}
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <span class="activity-status">Duration</span>
                            <span class="activity-status">${data.duration || '-'}</span>
                        </div>
                        <div class="approval-section mt-2">
                            <div class="d-flex flex-column gap-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="approval-label">Approval Status</span>
                                    ${data.approval.status ? `
                                        <span class="approval-badge approval-${data.approval.status}">${data.approval.status.charAt(0).toUpperCase() + data.approval.status.slice(1)}</span>
                                    ` : '<span class="approval-badge">-</span>'}
                                </div>
                                <div class="approval-info">
                                    <span class="approver-name">${data.approval.approver}</span>
                                    <span class="approval-time">${data.approval.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return cardHtml;
}

// Function to render cards for current page
function renderCards() {
    const container = document.getElementById('cardsContainer');
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentCards = filteredData.slice(startIndex, endIndex);
    
    container.innerHTML = currentCards.map(card => generateCardHTML(card)).join('');
    updatePagination();
    
    // Add click handlers to cards
    addCardClickHandlers();
}

// Function to update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const paginationContainer = document.querySelector('.pagination');
    
    // Reset current page if it exceeds total pages
    if (currentPage > totalPages) {
        currentPage = totalPages || 1;
    }
    
    // Previous button
    let paginationHTML = `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage - 1}" ${currentPage === 1 ? 'tabindex="-1" aria-disabled="true"' : ''}>
                <i class="bi bi-chevron-left"></i>
            </a>
        </li>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>
        `;
    }

    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'tabindex="-1" aria-disabled="true"' : ''}>
                <i class="bi bi-chevron-right"></i>
            </a>
        </li>
    `;

    paginationContainer.innerHTML = paginationHTML;
    
    // Add click event listeners to pagination items
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.tagName === 'I') {
                // If clicked on the icon, get the parent link
                const pageLink = e.target.closest('.page-link');
                if (pageLink) {
                    const newPage = parseInt(pageLink.dataset.page);
                    if (!isNaN(newPage) && newPage !== currentPage && newPage > 0 && newPage <= totalPages) {
                        currentPage = newPage;
                        // Scroll to top before rendering new page
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        renderCards();
                    }
                }
            } else {
                const newPage = parseInt(e.target.dataset.page);
                if (!isNaN(newPage) && newPage !== currentPage && newPage > 0 && newPage <= totalPages) {
                    currentPage = newPage;
                    // Scroll to top before rendering new page
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    renderCards();
                }
            }
        });
    });
}

// Function to show detail view
function showDetailView(cardData) {
    // First update the view state
    selectedCard = cardData;
    currentView = 'detail';
    
    // Update header section
    const searchSection = document.querySelector('.search-section');
    searchSection.innerHTML = `
        <div class="detail-header">
            <button class="btn btn-back">
                <i class="bi bi-arrow-left"></i>
            </button>
            <h4>Real Daily Activity</h4>
        </div>
    `;

    // Add click handler for back button
    document.querySelector('.btn-back').addEventListener('click', showListView);

    // Update content section
    const container = document.getElementById('cardsContainer');
    container.innerHTML = generateDetailViewHTML(cardData);

    // Hide pagination
    document.querySelector('.pagination-wrapper').style.display = 'none';
    
    // Use requestAnimationFrame to ensure scroll happens after DOM update
    requestAnimationFrame(() => {
        // Force a reflow to ensure the new content is rendered
        document.body.offsetHeight;
        // Scroll to top with smooth behavior
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth',
            // Add these options to ensure better mobile support
            block: 'start',
            inline: 'nearest'
        });
    });
}

// Function to show list view
function showListView() {
    // Scroll to top when showing list view
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    currentView = 'list';
    selectedCard = null;
    
    // Restore search section
    const searchSection = document.querySelector('.search-section');
    searchSection.innerHTML = `
        <div class="row align-items-center g-3">
            <div class="col">
                <div class="input-group">
                    <input type="text" class="form-control search-input" placeholder="Search RDA...">
                    <button class="btn btn-dark search-btn" type="button">
                        <i class="bi bi-search"></i><span class="d-none d-md-inline ms-2">Search</span>
                    </button>
                </div>
            </div>
            <div class="col-auto ps-md-0">
                <button class="btn btn-refresh">
                    <i class="bi bi-arrow-clockwise"></i>
                </button>
            </div>
        </div>
    `;

    // Restore event listeners
    initializeEventListeners();
    
    // Show pagination
    document.querySelector('.pagination-wrapper').style.display = 'block';
    
    // Render cards
    renderCards();
}

// Function to generate detail view HTML
function generateDetailViewHTML(data) {
    return `
        <div class="col-12">
            <div class="card detail-card">
                <div class="card-body p-1">
                    <h3 class="detail-title mb-4">${data.title}</h3>
                    
                    <!-- Employee Information Section -->
                    <div class="detail-section mb-4">
                        <h5 class="section-title mb-3">Employee Information</h5>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Full Name</label>
                                    <span class="detail-value">${data.employee.name}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Initial</label>
                                    <span class="detail-value employee-code">${data.employee.code}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Email</label>
                                    <span class="detail-value">${data.employee.email}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Department</label>
                                    <span class="detail-value">${data.employee.department}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Manager Name</label>
                                    <span class="detail-value">${data.employee.manager.name}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Manager Email</label>
                                    <span class="detail-value">${data.employee.manager.email}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Division</label>
                                    <span class="division-badge">${data.division}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Time Information Section -->
                    <div class="detail-section mb-4">
                        <h5 class="section-title mb-3">Time Activity</h5>
                        <div class="row g-3">
                            <div class="row g-3 mb-3 time-activity-cards">
                                <div class="col-6">
                                    <div class="detail-status-card check-in">
                                        <div class="detail-info-group">
                                            <label class="detail-label">Check In Time</label>
                                            <span class="detail-value">${data.checkIn}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="detail-status-card check-out">
                                        <div class="detail-info-group">
                                            <label class="detail-label">Check Out Time</label>
                                            <span class="detail-value">${data.checkOut || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Duration</label>
                                    <span class="detail-value">${data.duration || '-'}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Status</label>
                                    <div class="d-inline-block">
                                        <span class="status-badge status-${data.status} large-badge">
                                            ${data.status === 'check-in' ? 'Check In' : 'Check Out'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Created By</label>
                                    <span class="detail-value">Elon Musk</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Created On</label>
                                    <span class="detail-value">March 15, 2024 09:00 AM</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Modified By</label>
                                    <span class="detail-value">${data.employee.name}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Modified On</label>
                                    <span class="detail-value">March 18, 2024 02:15 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Detail Activity Section -->
                    <div class="detail-section mb-4">
                        <h5 class="section-title mb-3">Detail Activity</h5>
                        <div class="row g-4">
                            <!-- Status Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Status</label>
                                    ${data.activityStatus ? `
                                        <span class="activity-status status-${data.activityStatus} large-badge">
                                            ${data.activityStatus.charAt(0).toUpperCase() + data.activityStatus.slice(1)}
                                        </span>
                                    ` : '<span class="detail-value">-</span>'}
                                </div>
                            </div>

                            <!-- Huddle Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Related Huddle Subject (If Any)</label>
                                    <span class="detail-value">${data.activity.huddle || '-'}</span>
                                </div>
                            </div>

                            <!-- Project Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Project SproBest</label>
                                    <span class="detail-value">${data.activity.project.sproBest}</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Project Name</label>
                                    <span class="detail-value">${data.activity.project.name}</span>
                                </div>
                            </div>

                            <!-- Software Development Checkbox -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Software Development</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" ${data.activity.softwareDev ? 'checked' : ''} disabled>
                                        <label class="form-check-label">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- Application -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Application</label>
                                    <span class="detail-value">${data.activity.application || '-'}</span>
                                </div>
                            </div>

                            <!-- Program ID -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Program ID</label>
                                    <span class="detail-value">${data.activity.programId || '-'}</span>
                                </div>
                            </div>

                            <!-- Category Information -->
                            <div class="col-md-6">
                                <div class="detail-info-group">
                                    <label class="detail-label">Category</label>
                                    <div class="category-badges">
                                        <span class="category-badge">${data.activity.category.type}</span>
                                        <span class="category-badge">${data.activity.category.area}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Activity Note -->
                            <div class="col-12">
                                <div class="detail-info-group">
                                    <label class="detail-label">Activity</label>
                                    <div class="activity-note">
                                        ${data.activity.note || '-'}
                                    </div>
                                </div>
                            </div>

                            <!-- Activity Description -->
                            <div class="col-12">
                                <div class="detail-info-group">
                                    <label class="detail-label">Description</label>
                                    <div class="activity-note">
                                        ${data.activity.description || '-'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Approval Section -->
                    <div class="detail-approval-section">
                        <h5 class="section-title mb-3">Approval</h5>
                        <div class="approval-card">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="detail-info-group">
                                        <label class="detail-label">Status</label>
                                        ${data.approval.status ? `
                                            <span class="approval-badge approval-${data.approval.status} large-badge">
                                                ${data.approval.status.charAt(0).toUpperCase() + data.approval.status.slice(1)}
                                            </span>
                                        ` : '<span class="detail-value">-</span>'}
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="detail-info-group text-md-end mt-2">
                                        <label class="detail-label">Approved By</label>
                                        <div class="approver-info">
                                            <span class="detail-value">${data.approval.approver || '-'}</span>
                                            ${data.approval.time ? `
                                                <small class="text-muted ms-2">${data.approval.time.split(' ')[0]}</small>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to initialize event listeners
function initializeEventListeners() {
    // Search input handling
    const searchInput = document.querySelector('.search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 300);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
    
    // Search button click handler
    const searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener('click', performSearch);
    
    // Refresh button handler
    const refreshButton = document.querySelector('.btn-refresh');
    refreshButton.addEventListener('click', refreshData);
}

// Function to add click handlers to cards
function addCardClickHandlers() {
    document.querySelectorAll('[data-card-id]').forEach(card => {
        card.addEventListener('click', () => {
            const cardId = parseInt(card.dataset.cardId);
            const cardData = filteredData[cardId];
            showDetailView(cardData);
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderCards();
}); 