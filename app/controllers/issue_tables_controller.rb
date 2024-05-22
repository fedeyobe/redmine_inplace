class IssueTablesController < ApplicationController
  accept_api_auth :fetch_active_members, :fetch_issue_allowed_status

  def fetch_active_members
    current_project = Project.find_by(id: params[:id])
    if current_project.nil?
      render json: { error: 'Project not found' }, status: :not_found
      return
    end

    active_members = current_project.users.where(status: 1)
    mapped_active_members = active_members.map { |member| { id: member.id, name: member.name } }
    sorted_active_members = mapped_active_members.sort_by { |member| member[:name] }

    render json: { active_members: sorted_active_members }, status: :ok
  end
  def fetch_issue_allowed_status
    issue=Issue.find_by(id: params[:id])
    if issue.nil?
      render json: { error: 'Issue not found' }, status: :not_found
      return
    end
    allowed_status = issue.new_statuses_allowed_to
    render json: { allowed_status: allowed_status }, status: :ok
  end
  # def create
  #   current_project = Project.find_by(id: params[:id])

  #   # Check if the project exists
  #   if current_project.nil?
  #     render json: { message: 'Project not found' }, status: :not_found
  #     return
  #   end

  #   # Update the project name if the 'name' parameter is provided
  #   if params[:name].present?
  #     if current_project.update(name: params[:name])
  #       render json: { message: 'Project name updated successfully' }, status: :ok
  #     else
  #       render json: { error: 'Failed to update project name' }, status: :unprocessable_entity
  #     end
  #   else
  #     render json: { error: 'Name parameter missing' }, status: :unprocessable_entity
  #   end
  # end



end
